<template>
  <div class="wishlist-container">
    <div class="wishlist-content" v-if="wishlist.length > 0">
      <h1 class="title">Your Wishlist</h1>
      <div class="wishlist-products">
        <div class="wishlist-product" v-for="(product, index) in wishlist" :key="index">
          <img :src="product.image" :alt="product.name" />
          <div class="product-info">
            <p class="product-title">{{ product.name }}</p>
            <p class="product-price">${{ product.price }}</p>
            <p class="product-size">Size: {{ product.size }}</p>
            <p class="product-quantity">Quantity: {{ product.quantity }}</p>
            <button @click="removeFromWishlist(product.id)" class="remove-button">Remove</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wishlist-content" v-else>
      <h1 class="title">Aww... Snap. :( Your wish list is Empty!</h1>
      <p class="subtitle">Check out our latest arrivals and stay up to date with our latest style!</p>
      <p class="start-shopping" @click="navigateToShop">Start Shopping</p>
      <div class="category-buttons">
        <button
          v-for="category in categories"
          :key="category"
          @click="navigateToCategory(category)"
          class="category-button"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue'
import { useProductStore2 } from '@/store/productstore'
import { computed } from 'vue'

const categories = ['Wall Decor', 'Lamps', 'Furniture']
const router = useRouter()
const productStore = useProductStore2()

const wishlist = computed(() => productStore.wishlist)

const navigateToShop = () => {
  console.log('Navigating to shop...')
  router.push('/browse')
}

const navigateToCategory = (category) => {
  const routePath = `/browse/${category.replace(' ', '-').toLowerCase()}`
  console.log(`Navigating to category: ${routePath}`)
  router.push(routePath)
}

const removeFromWishlist = (productId) => {
  productStore.removeFromWishlist(productId)
}
</script>

<style scoped>
.wishlist-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
}

.wishlist-content {
  flex-grow: 1;
  max-width: 40rem;
  text-align: center;
  margin: 4rem auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.start-shopping {
  font-size: 1rem;
  color: black;
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: 500;
  display: inline-block;
}

.start-shopping:hover {
  text-decoration: underline;
}

.category-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.category-button {
  background-color: black;
  color: white;
  border-radius: 0.3125rem;
  padding: 0.4rem 7rem;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 70rem;
  height: auto;
  transition: opacity 0.2s ease;
  text-align: center;
  white-space: nowrap; /* Prevent line breaks */
}

.category-button:hover {
  opacity: 0.8;
}

.wishlist-products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wishlist-product {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
}

.wishlist-product img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 1rem;
}

.product-info {
  text-align: left;
}

.product-title {
  font-size: 1rem;
  font-weight: bold;
}

.product-price {
  font-size: 1rem;
  color: #7ada5d;
  margin-top: 0.5rem;
}

.product-size {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

.product-quantity {
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
}

.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

.remove-button:hover {
  opacity: 0.8;
}
</style>
