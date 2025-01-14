<template>
  <div class="wishlist-container">
    <div class="wishlist-content" v-if="wishlist.length > 0">
      <h1 class="title">Wish List ({{ wishlist.length }} {{ wishlist.length === 1 ? 'item' : 'items' }})</h1>
      <div class="wishlist-products">
        <div class="wishlist-product" v-for="(product, index) in wishlist" :key="index">
          <div class="product-header" @click="navigateToProduct(product.category, product.id)">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
            <div class="product-details">
              <p class="name">{{ product.name }}</p>
              <p class="price">{{ product.price }}</p>
            </div>
            <button @click.stop="removeFromWishlist(product.id)" class="delete-button">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KDapWmiEGA9WZVlnkOA9nLHus92jPR.png" alt="Delete" class="delete-icon" />
            </button>
          </div>
          <div class="product-info">
            <div class="selectors">
              <div class="size-wrapper">
                <label class="size-label">Size:</label>
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
            </div>
            <button
              @click.stop="addToCart(product)"
              class="move-to-cart">
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
  max-width: 75rem; /* 1200px */
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.wishlist-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr)); /* 250px */
  gap: 1rem;
}

.wishlist-product {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 0.3125rem; /* 5px */
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px 4px */
}

.product-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.product-image {
  width: 5rem; /* 80px */
  height: 5rem; /* 80px */
  object-fit: cover;
  border-radius: 0.3125rem; /* 5px */
  margin-right: 1rem;
}

.product-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.price, .name {
  margin: 0;
}

.price {
  font-size: 1rem;
  font-weight: 500;
  color: #00771e;
  margin-top: 0.5rem;
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
  width: 1.25rem; /* 20px */
  height: 1.25rem; /* 20px */
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.selectors {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem; /* Add some space between selectors and button */
}

.size-wrapper {
  display: flex;
  align-items: center;
}

.quantity-wrapper {
  display: flex;
  align-items: center;
  margin-left: -1rem; /* Adjust this value to move quantity to the left */
}

.size-label,
.quantity-label {
  font-size: 0.875rem;
  margin-right: 0.5rem;
}

.size-select {
  width: auto;
  padding: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem; /* 4px */
  background-color: #f5f5f5; /* Add gray background */
  color: #333; /* Darken text color */
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-button {
  width: 1.875rem; /* 30px */
  height: 1.25rem; /* 20px */
  background-color: #ddd;
  border: none;
  cursor: pointer;
  border-radius: 0.375rem; /* 6px */
  font-size: 0.8rem;
}

.quantity {
  margin: 0 0.5rem;
  font-size: 0.85rem;
}

.move-to-cart {
  width: 100%; /* Full width */
  padding: 0.5rem;
  border: 1px solid black;
  background-color: transparent;
  color: black;
  border-radius: 0.25rem; /* 4px */
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, opacity 0.2s;
  text-align: center; /* Center text */
  margin-top: 1rem; /* Add some space above the button */
}

.move-to-cart:hover {
  background-color: #f0f0f0;
}

.empty-wishlist {
  text-align: center;
  max-width: 37.5rem; /* 600px */
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
  min-width: 11.25rem; /* 180px */
  border-radius: 0.25rem; /* 4px */
  cursor: pointer;
  transition: opacity 0.2s;
}

.category-button:hover {
  opacity: 0.8;
}

@media (max-width: 48rem) { /* 768px */
  .wishlist-products {
    grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr)); /* 200px */
    gap: 1rem;
  }
}

@media (max-width: 30rem) { /* 480px */
  .wishlist-products {
    grid-template-columns: 1fr;
  }

  .wishlist-product {
    flex-direction: row;
    gap: 1rem;
  }

  .product-image {
    width: 5rem; /* 80px */
    height: 5rem; /* 80px */
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
