import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

import process from 'process'
window.process = process

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', Icon)

app.mount('#app')
