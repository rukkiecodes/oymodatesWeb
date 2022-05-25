import { defineStore } from 'pinia'

import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth"

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

import { auth } from '../service/firebase'

import VueCookies from 'vue-cookies'

import router from '../router'

export const useSigninStore = defineStore({
  id: 'auth',
  state: () => ({
    dialog: false,
    user: null,
    facebookLoading: false,
    googleLoading: false
  }),

  actions: {
    openDialog () {
      this.dialog = !this.dialog
    },

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
          this.dialog = false
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
          this.dialog = false
        })
        .catch(error => {
          this.dialog = false
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = FacebookAuthProvider.credentialFromError(error)
        })
    },

    signinUser () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          VueCookies.set('oymoUser', JSON.stringify(user))
        } else this.user = null
      })
    },

    signoutUser () {
      signOut(auth)
    }
  }
})
