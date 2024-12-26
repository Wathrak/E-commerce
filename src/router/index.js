import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import Login from '@/views/Login.vue'
import Product from '@/views/Product.vue'
import Checkout from '@/views/Checkout.vue'
import Register from '@/views/Register.vue'
import Cart from '@/views/Cart.vue'
import Wishlist from '@/views/Wishlist.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/browse', name: 'Browse', component: Browse },
  { path: '/login', name: 'login', component: Login },
  { path: '/product', name: 'Product', component: Product },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/register', name: 'Register', component: Register },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
