import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css'

import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify.ts'
import '@mdi/font/css/materialdesignicons.css'
import 'leaflet/dist/leaflet.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
