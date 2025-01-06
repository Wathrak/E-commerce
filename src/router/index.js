import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import Product from '@/views/Product.vue'
import Checkout from '@/views/CheckoutPage.vue'
import Register from '@/views/Register.vue'
import Cart from '@/views/Cart_old.vue'
import Wishlist from '@/views/Wishlist.vue'
import Login from '@/views/Login.vue'
import MainLayout from '@/views/MainLayout.vue'
import { useProductStore } from '@/store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresAuth: false },
  },
  {
    path: '/',
    component: MainLayout, // MainLayout serves as the parent layout
    meta: { requiresAuth: true },
    children: [
      {
        path: '', // Default child for "/"
        name: 'home',
        component: Home, // Render the HomePage component
      },
      {
        path: 'browse',
        name: 'browse',
        component: Browse,
      },
      {
        path: 'product/:category/:id',
        name: 'product',
        component: Product,
        props: true, // Enable dynamic props
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: Checkout,
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart,
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: Wishlist,
      },
      {
        path: 'browse/:category',
        component: Browse,
      },
    ],
  },
  {
    path: '/browse',
    redirect: '/browse/walldecor',
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth ?? true // default to true if not specified
  const productStore = useProductStore()
  const isLoggedIn = productStore.isLoggedIn
  // console.log(isLoggedIn)

  if (requiresAuth && !isLoggedIn) {
    next({ name: 'login' })
  } else if (isLoggedIn && (to.name === 'login' || to.name === 'register')) {
    next({
      // redirect to home if logged in and trying to access login or register
      name: 'home',
    })
  } else {
    next()
  }
})

export default router
