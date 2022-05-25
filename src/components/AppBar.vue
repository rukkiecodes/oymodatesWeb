<template>
  <v-app-bar flat>
    <span class="logo mr-md-10 mt-n2 text-h5">Oymodates</span>

    <v-spacer />
    <v-text-field hide-details density="compact" variant="underlined" clearable label="Search videos"
      prepend-inner-icon="mdi-magnify" />
    <v-spacer />

    <v-btn class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <v-icon>mdi-plus-box-outline</v-icon>
    </v-btn>
    <v-btn class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <v-icon>mdi-telegram</v-icon>
    </v-btn>
    <v-btn class="text-capitalize mr-4" icon rounded="lg" size="x-small">
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>

    <v-menu open-on-hover anchor="start" transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-avatar v-bind="props" class="ml-md-4" size="small">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
      </template>

      <v-list min-width="200" density="compact">
        <v-list-item v-for="(item, index) in items" :key="index" density="compact" :to="item.to">
          <v-icon :icon="item.icon" class="mr-4" />
          <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-item density="compact">
          <v-icon icon="mdi-logout mdi-flip-h" class="mr-4" />
          <v-list-item-title class="text-body-2">Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
const items = [
  { icon: 'mdi-account-outline', title: 'View profile', to: '/account' },
  { icon: 'mdi-cog-outline', title: 'Settings', to: '/settings' }
]
</script>