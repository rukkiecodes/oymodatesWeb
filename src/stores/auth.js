import { defineStore } from 'pinia'

import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from "firebase/auth"

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

import { auth } from '../service/firebase'

import VueCookies from 'vue-cookies'

import router from '../router'

export const useSigninStore = defineStore({
  id: 'auth',
  state: () => ({
    dialog: false,
    user: null
  }),

  actions: {
    openDialog () {
      this.dialog = !this.dialog
    },

    googleLogin () {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          const user = result.user

          VueCookies.set('oymoUser', JSON.stringify(user))
          console.log('oymoUser: ', VueCookies.get('oymoUser'))
          this.dialog = false
        }).catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = GoogleAuthProvider.credentialFromError(error)
        })
    },

    facebookLogin () {
      signInWithPopup(auth, facebookProvider)
        .then(result => {
          const user = result.user
          const credential = FacebookAuthProvider.credentialFromResult(result)
          const accessToken = credential.accessToken

          VueCookies.set('oymoUser', JSON.stringify(user))
          console.log('oymoUser: ', VueCookies.get('oymoUser'))
          this.dialog = false
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.customData.email
          const credential = FacebookAuthProvider.credentialFromError(error)
        })
    },

    loginUser () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user
          VueCookies.set('oymoUser', JSON.stringify(user))
          router.push('/app')
        } else this.user = null
      })
    }
  }
})
