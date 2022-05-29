import { defineStore } from "pinia"

import VueCookies from 'vue-cookies'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { db } from '../service/firebase'

import router from '../router'

export const uploadStore = defineStore({
  id: 'upload',

  state: () => ({
    uploadLoading: false,
    videoURL: '',
    videoUploadProgress: 0,
    thumbnail: '',
    caption: '',
    allowComment: true
  }),

  actions: {
    async uploadVideo () {
      const user = await VueCookies.get('oymoUser')

      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'video/*')
      input.click()

      input.addEventListener('change', e => {
        const video = e.target?.files[0]

        if (!video) return

        const storage = getStorage()

        let link = `reels/${user.uid}/video/${video.name}`

        const uploadTask = uploadBytesResumable(ref(storage, link), video)

        uploadTask.on('state_changed',
          snapshot => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            console.log('progress: ', progress)
            this.videoUploadProgress = progress
          },
          error => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then(downloadURL => {
                this.videoURL = downloadURL
              })
          })
      })
    },

    async savePost (userProfile) {
      const user = await VueCookies.get('oymoUser')

      addDoc(collection(db, 'reels'), {
        user: {
          id: user?.uid,
          photoURL: userProfile?.photoURL,
          username: userProfile?.username,
          displayName: userProfile?.displayName
        },
        media: this.videoURL,
        mediaLink: '',
        thumbnail: '',
        thumbnailLink: '',
        description: this.caption,
        likesCount: 0,
        commentsCount: 0,
        allowComment: this.allowComment,
        timestamp: serverTimestamp()
      }).finally(() => {
        this.videoUploadProgress = 0
        router.push('/')
      })
    }
  }
})