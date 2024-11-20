import BrowsePage from '@/views/BrowsePage.vue'
import HomePage from '../views/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/views/ProductPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowsePage,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPage,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ],
})

export default router
