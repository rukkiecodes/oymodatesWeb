import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoHome } from 'oh-vue-icons/icons'

addIcons(
  CoHome
)

loadFonts()

const app = createApp(App)

app.component('home-icon', OhVueIcon)
app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
