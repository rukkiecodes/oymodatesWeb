<script setup>
import { UploadIcon } from '@heroicons/vue/outline'
import { uploadStore } from '../../stores/upload'
import { useSigninStore } from '../../stores/auth'

const auth = useSigninStore()
const upload = uploadStore()

</script>

<template>
  <v-container>
    <v-row align="start" justify="start">
      <v-col cols="12" sm="12" md="4">
        <v-card elevation="4" rounded="lg" class="py-5">
          <v-card-text class="text-center">
            <v-progress-circular :model-value="upload.videoUploadProgress" size="70" color="#ff4040" rotate="180">
              <UploadIcon style="width: 40px" />
            </v-progress-circular>
          </v-card-text>
          <v-card-text v-if="upload.videoUploadProgress" class="text-center py-0 text-caption">
            Upload is {{ upload.videoUploadProgress }}% done
          </v-card-text>
          <v-card-text class="text-center">
            Select video to upload
          </v-card-text>
          <v-card-text class="text-center py-0">
            <span class="text-grey text-caption">MP4 or WebM</span>
            <br />
            <span class="text-grey text-caption">Up to 10 minutes</span>
            <br />
            <span class="text-grey text-caption">Less that 100 MB</span>
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn @click="upload.uploadVideo" block class="text-capitalize text-white" color="#ff4040" elevation="0"
              rounded="lg">
              Select file</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="8" class="py-4">
        <v-card elevation="0">
          <v-text-field v-model="upload.caption" label="Caption" variant="outlined" density="compact" hide-details />

          <video v-if="upload.videoURL" class="reels-video mt-7"
            style="border-radius: 12px; max-height: 200px; max-width: 500px;" :src="upload.videoURL" />

          <v-checkbox v-model="upload.allowComment" color="#ff4040" label="Allow comments" hide-details />

          <v-card-actions>
            <v-btn class="text-capitalize" variant="outlined" color="grey-darken-2" rounded="lg">Cancel</v-btn>
            <v-btn @click="upload.savePost(auth.userProfile)" class="text-capitalize" variant="outlined" color="#ff4040"
              rounded="lg">
              {{
                  upload.uploadLoading ? 'Loading...' : 'Post'
              }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

