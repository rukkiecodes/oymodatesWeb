import { defineStore } from 'pinia'

import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth"

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

import { auth, db } from '../service/firebase'

import VueCookies from 'vue-cookies'

import router from '../router'
import { collection, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"

export const useSigninStore = defineStore({
  id: 'auth',
  state: () => ({
    auth: false,
    user: null,
    userProfile: null,
    facebookLoading: false,
    googleLoading: false,
    editProfileDialog: false,
    userProfileCredential: {
      username: '',
      job: '',
      company: '',
      school: '',
      gender: '',
      city: '',
      location: null
    },
    updateProfileLoading: false,
    pictureUploadProgress: 0,
    usernames: []
  }),

  actions: {
    googleLogin () {
      this.googleLoading = true
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user

          VueCookies.set('oymoUser', JSON.stringify(user))
          console.log('oymoUser: ', VueCookies.get('oymoUser'))
          this.googleLoading = false
          this.userSetup()
        }).catch(error => {
          this.googleLoading = false
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
    },

    facebookLogin () {
      this.facebookLoading = true
      signInWithPopup(auth, facebookProvider)
        .then(result => {
          const user = result.user
          const credential = FacebookAuthProvider.credentialFromResult(result)
          const accessToken = credential.accessToken

          VueCookies.set('oymoUser', JSON.stringify(user))
          console.log('oymoUser: ', VueCookies.get('oymoUser'))
          this.facebookLoading = false
          this.userSetup()
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = FacebookAuthProvider.credentialFromError(error)
        })
    },

    signinUser () {
      onAuthStateChanged(auth, user => {
        if (user) {
          this.user = user
          VueCookies.set('oymoUser', JSON.stringify(user))
        } else this.user = null
      })
    },

    signoutUser () {
      signOut(auth)
      router.push('/')
    },

    async userSetup () {
      const user = await VueCookies.get('oymoUser')

      const unsub = onSnapshot(doc(db, 'users', user.uid),
        snapshot => {
          if (!snapshot.exists()) {
            router.push(this.userProfile?.username ? `/@${this.userProfile?.username}` : `/@${user?.displayName}`)
            setTimeout(() => this.editProfileDialog = true, 1000)
          }
        })
      return unsub
    },

    toggleEditProfileDialog () {
      this.editProfileDialog = !this.editProfileDialog
    },

    async updateProfile () {
      const user = await VueCookies.get('oymoUser')

      if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(position => this.userProfileCredential.location = JSON.stringify(position))

      if (this.userProfile?.id || this.userProfile != null) {
        if (this.usernames.includes(this.userProfileCredential.username))
          updateDoc(doc(db, 'users', user.uid), {
            job: this.userProfileCredential.job,
            company: this.userProfileCredential.company,
            school: this.userProfileCredential.school,
            location: this.userProfileCredential.location,
            city: this.userProfileCredential.city,
            gender: this.userProfileCredential.gender,
          }).finally(() => this.getUserProfile())
        else
          updateDoc(doc(db, 'users', user.uid), {
            job: this.userProfileCredential.job,
            company: this.userProfileCredential.company,
            username: this.userProfileCredential.username,
            school: this.userProfileCredential.school,
            location: this.userProfileCredential.location,
            city: this.userProfileCredential.city,
            gender: this.userProfileCredential.gender,
          }).then(() => {
            if (this.userProfileCredential.username != this.userProfile.username)
              router.push(`/@${this.userProfileCredential?.username}`)
          }).finally(() => {
            this.getUsernames()
            this.getUserProfile()
          })
      }
      else
        setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          displayName: user.displayName,
          job: this.userProfileCredential.job,
          company: this.userProfileCredential.company,
          username: this.userProfileCredential.username,
          school: this.userProfileCredential.school,
          location: this.userProfileCredential.location,
          city: this.userProfileCredential.city,
          gender: this.userProfileCredential.gender,
          timestamp: serverTimestamp()
        }).then(() => router.push(`/@${this.userProfileCredential?.username}`))
          .finally(() => this.getUserProfile())
    },

    async getUsernames () {
      const unsub = onSnapshot(collection(db, 'users'),
        querySnapshot => querySnapshot.forEach(doc => this.usernames.push(doc?.data()?.username)))
      return unsub
    },

    async updateProfilePicture () {
      const user = await VueCookies.get('oymoUser')
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.click()

      input.addEventListener('change', e => {
        const file = e.target?.files[0]

        if (!file) return

        const storage = getStorage()

        const pictureRef = ref(storage, `avatars/${user.uid}/${file.name}`)
        const desertRef = ref(storage, this.userProfile.avatarLink)
        const uploadTask = uploadBytesResumable(pictureRef, file)

        uploadTask.on('state_changed',
          snapshot => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log('progress: ', progress)
            this.pictureUploadProgress = progress
          },
          error => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(downloadURL => {
                if (!this.userProfile.photoURL)
                  updateDoc(doc(db, 'users', user.uid), {
                    photoURL: downloadURL,
                    avatarLink: uploadTask.snapshot.ref._location.path
                  }).finally(() => {
                    this.getUserProfile()
                    this.pictureUploadProgress = 0
                  })
                else
                  deleteObject(desertRef).then(() => {
                    updateDoc(doc(db, 'users', user.uid), {
                      photoURL: downloadURL,
                      avatarLink: uploadTask.snapshot.ref._location.path
                    }).finally(() => {
                      this.getUserProfile()
                      this.pictureUploadProgress = 0
                    })
                  })
              })
          })
      })
    },

    async getUserProfile () {
      const user = await VueCookies.get('oymoUser')
      let profile = await (await getDoc(doc(db, 'users', user.uid))).data()

      if (profile) {
        this.userProfile = { ...profile }
        this.userProfileCredential = { ...profile }
        this.auth = true
      } else this.auth = true
    }
  }
})
