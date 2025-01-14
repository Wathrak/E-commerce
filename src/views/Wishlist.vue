<template>
  <div class="wishlist-container">
    <div class="wishlist-content" v-if="wishlist.length > 0">
      <h1 class="title">Wish List ({{ wishlist.length }} {{ wishlist.length === 1 ? 'item' : 'items' }})</h1>
      <div class="wishlist-products">
        <div class="wishlist-product" v-for="(product, index) in wishlist" :key="index" @click="navigateToProduct(product.category, product.id)">
          <img
            :src="product.image"
            :alt="product.name"
            class="product-image"
          />
          <div class="product-info">
            <div class="product-header">
              <div>
                <p class="price">US ${{ product.price }}</p>
                <p class="name">{{ product.name }}</p>
              </div>
              <button @click.stop="removeFromWishlist(product.id)" class="delete-button">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KDapWmiEGA9WZVlnkOA9nLHus92jPR.png" alt="Delete" class="delete-icon" />
              </button>
            </div>
            <div class="size-wrapper">
              <label class="size-label">Size</label>
              <select v-model="product.size" class="size-select" @click.stop>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <div class="quantity-wrapper">
              <label class="quantity-label">Quantity</label>
              <div class="quantity-controls">
                <button @click.stop="decreaseQuantity(product)" class="quantity-button">-</button>
                <span class="quantity">{{ product.quantity }}</span>
                <button @click.stop="increaseQuantity(product)" class="quantity-button">+</button>
              </div>
            </div>
            <button
              @click.stop="addToCart(product)"
              :class="{'move-to-cart': true}">
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="empty-wishlist">
      <h1 class="empty-title">Aww... Snap. :( Your wish list is Empty!</h1>
      <p class="empty-subtitle">Check out our latest arrivals and stay up to date with our latest style!</p>
      <p class="start-shopping" @click="navigateToShop">Start Shopping</p>
      <div class="category-container">
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
import { useCartStore } from '@/store/cartstores'
import { computed } from 'vue'

const categories = ['Wall Decor', 'Lamps', 'Furniture']
const router = useRouter()
const productStore = useProductStore2()
const cartStore = useCartStore()

const wishlist = computed(() => productStore.wishlist)

// Methods for wishlist management
const navigateToShop = () => {
  router.push('/browse')
}

const navigateToCategory = (category) => {
  const routePath = `/browse/${category.replace(' ', '-').toLowerCase()}`
  router.push(routePath)
}

const removeFromWishlist = (productId) => {
  productStore.removeFromWishlist(productId)
}

const addToCart = (product) => {
  cartStore.addProduct({ ...product, quantity: product.quantity })
}

const increaseQuantity = (product) => {
  product.quantity = (product.quantity || 1) + 1
}

const decreaseQuantity = (product) => {
  if (product.quantity > 1) {
    product.quantity -= 1
  }
}

// Navigate to product page
const navigateToProduct = (category, productId) => {
  if (!category) {
    console.error('Product category is undefined')
    return
  }
  router.push(`/product/${category.toLowerCase()}/${productId}`)
}
</script>

<style scoped>
.wishlist-container {
  min-height: 100vh;
  background-color: white;
  padding: 2rem;
}

.wishlist-content {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.wishlist-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.wishlist-product {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.product-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.price {
  font-size: 1rem;
  font-weight: 500;
  color: #e74c3c;
}

.name {
  font-size: 1rem;
  color: #333;
}

.delete-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.delete-icon {
  width: 20px;
  height: 20px;
}

.size-wrapper {
  margin-bottom: 1rem;
}

.size-label {
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.size-select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

.quantity-wrapper {
  margin-bottom: 1rem;
}

.quantity-label {
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  background: none;
  border: 1px solid #ddd;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  background-color: #f5f5f5;
}

.quantity {
  margin: 0 1rem;
  font-size: 1rem;
}

.move-to-cart {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid black;
  background-color: transparent;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: auto;
  transition: background-color 0.2s, opacity 0.2s;
}

.move-to-cart:hover {
  background-color: #f0f0f0;
}

.empty-wishlist {
  text-align: center;
  max-width: 600px;
  margin: 4rem auto;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.empty-subtitle {
  color: #666;
  margin-bottom: 2rem;
}

.start-shopping {
  font-weight: 500;
  margin-bottom: 2rem;
  cursor: pointer;
}

.start-shopping:hover {
  text-decoration: underline;
}

.category-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.category-button {
  background-color: black;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  min-width: 180px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.category-button:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .wishlist-products {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .wishlist-products {
    grid-template-columns: 1fr;
  }

  .wishlist-product {
    flex-direction: row;
    gap: 1rem;
  }

  .product-image {
    width: 120px;
    height: 120px;
    margin-bottom: 0;
  }

  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .move-to-cart {
    margin-top: 1rem;
  }
}
</style>
