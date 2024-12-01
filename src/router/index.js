import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/browse', name: 'Browse', component: Browse },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
