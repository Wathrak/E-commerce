import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import Login from '@/views/Login.vue'
import Product from '@/views/Product.vue'
import Checkout from '@/views/Checkout.vue'
import Register from '@/views/Register.vue'

const routes = [
  { path: '/register', name: 'Register', component: Register },
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/product', name: 'Product', component: Product },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  {
    path: '/browse/:category',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/browse',
    redirect: '/browse/walldecor',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
