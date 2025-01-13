import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useProductStore } from './store'

import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'

import process from 'process'
window.process = process

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon', Icon)

const productStore = useProductStore()
productStore.$patch({
  // Set initial state or perform actions
})

app.mount('#app')
