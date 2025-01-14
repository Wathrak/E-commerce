<template>
  <div class="product-container" v-if="currentProduct">
    <div class="left-column">
      <div class="image-gallery">
        <div class="thumbnail-list">
          <img
            v-for="(thumb, index) in currentProduct.thumbnails"
            :key="index"
            :src="thumb"
            @click="setMainImage(thumb)"
            :class="{ active: thumb === mainImage }"
            alt="Thumbnail"
          />
        </div>
        <div class="main-image">
          <img :src="mainImage" alt="Main Product Image" />
        </div>
      </div>

      <div class="reviews-section">
        <h3>Other Reviews from this Shop</h3>
        <div class="reviews-summary">
          <span>⭐⭐⭐⭐⭐ (2,993)</span>
        </div>
        <div class="review-card" v-for="(review, index) in reviews" :key="index">
          <div class="review-header">
            <span class="review-rating">⭐⭐⭐⭐⭐</span>
          </div>
          <p class="review-text">{{ review.text }}</p>
          <div class="review-purchase">
            <span class="purchase-info">Purchase: {{ review.product }}</span>
          </div>
          <div class="review-details">
            <span class="review-user">{{ review.user }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
          <div class="review-ratings">
            <span>Item Quality ⭐ {{ review.itemQuality }}</span>
            <span>Shipping ⭐ {{ review.shipping }}</span>
            <span>Customer Service ⭐ {{ review.customerService }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="product-details">
      <p class="price">{{ currentProduct.price }}</p>
      <p class="description">{{ currentProduct.description }}</p>

      <h3 class="section-title">Size</h3>
      <div class="size-selector">
        <label
          v-for="size in sizes"
          :key="size"
          @click="selectSize(size)"
          :class="{ 'selected-size': selectedSize === size }"
        >
          <input type="radio" :value="size" v-model="selectedSize" />
          {{ size }}
        </label>
      </div>

      <h3 class="section-title">Quantity</h3>
      <div class="quantity-selector">
        <button @click="decreaseQuantity">-</button>
        <span>{{ quantity }}</span>
        <button @click="increaseQuantity">+</button>
      </div>

      <div class="action-buttons">
        <button class="add-to-bag" @click="addToBag">Add to Cart</button>
        <button @click="toggleWishlist" class="icon-button">
          <Icon
            :icon="isInWishlist ? 'mdi:heart' : 'mdi:heart-outline'"
            width="30px"
            height="30px"
          />
        </button>
      </div>

      <div class="features">
        <div class="feature">
          <i class="icon-delivery"></i>
          <div class="feature-text">
            <span class="feature-title">Fast Delivery</span>
            <small class="feature-subtext">From 1 - 2 days</small>
          </div>
        </div>
        <div class="feature">
          <i class="icon-hotline"></i>
          <div class="feature-text">
            <span class="feature-title">Support hotline</span>
            <small class="feature-subtext">(+855) 016 126 629</small>
          </div>
        </div>
        <div class="feature">
          <i class="icon-payment"></i>
          <div class="feature-text">
            <span class="feature-title">Easy Payment</span>
            <small class="feature-subtext">Various methods</small>
          </div>
        </div>
      </div>

      <div class="more-products">
        <h3>More Products</h3>
        <div class="product-list">
          <div class="product-item" v-for="(product, index) in moreProducts" :key="index">
            <img :src="product.image" :alt="product.title" />
            <div class="product-info">
              <p class="product-title">{{ product.title }}</p>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading product...</p>
  </div>
</template>

<script>
import { useCartStore } from '@/store/cartstores'
import { useProductStore2 } from '@/store/productstore'
import { computed, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const cartStore = useCartStore()
    const productStore = useProductStore2()
    const route = useRoute()

    const category = ref(route.params.category)
    const productId = ref(Number(route.params.id))

    const normalizeCategory = (cat) => {
      switch (cat) {
        case 'lamp':
        case 'lamps':
          return 'Lamps'
        case 'wall-decor':
        case 'wall-decors':
          return 'Wall Decor'
        case 'furniture':
        case 'furnitures':
          return 'Furniture'
        default:
          return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
      }
    }

    const normalizedCategory = computed(() => normalizeCategory(category.value))
    const currentProduct = ref(null)
    const mainImage = ref('')

    watchEffect(() => {
      console.log('Current Category:', normalizedCategory.value)
      console.log('Product ID:', productId.value)
      currentProduct.value = productStore.products.find(
        product => product.id === productId.value && product.category === normalizedCategory.value
      )
      console.log('Current Product:', currentProduct.value)
      if (currentProduct.value && !mainImage.value) {
        mainImage.value = currentProduct.value.thumbnails[0]
      }
    })

    const setMainImage = thumb => {
      mainImage.value = thumb
    }

    const increaseQuantity = () => {
      productStore.increaseQuantity()
    }

    const decreaseQuantity = () => {
      productStore.decreaseQuantity()
    }

    const selectSize = (size) => {
      productStore.selectSize(size)
    }

    const addToBag = () => {
      const productData = {
        id: currentProduct.value.id,
        name: currentProduct.value.name,
        price: currentProduct.value.price,
        size: productStore.selectedSize,
        quantity: productStore.quantity,
        image: mainImage.value,
      }
      cartStore.addProduct(productData)
      alert(`${currentProduct.value.name} has been added to your bag!`)
    }

    const toggleWishlist = () => {
      const productData = {
        id: currentProduct.value.id,
        name: currentProduct.value.name,
        price: currentProduct.value.price,
        size: productStore.selectedSize,
        quantity: productStore.quantity,
        image: mainImage.value,
      }
      if (isInWishlist.value) {
        productStore.removeFromWishlist(currentProduct.value.id)
      } else {
        productStore.addToWishlist(productData)
      }
    }

    const quantity = computed(() => productStore.quantity)
    const sizes = computed(() => productStore.sizes)
    const selectedSize = computed(() => productStore.selectedSize)
    const reviews = computed(() => productStore.reviews)
    const moreProducts = computed(() => productStore.moreProducts)
    const isInWishlist = computed(() => productStore.isInWishlist(currentProduct.value?.id))

    watch(route, (newRoute) => {
      category.value = newRoute.params.category
      productId.value = Number(newRoute.params.id)
      mainImage.value = ''
    })

    return {
      currentProduct,
      mainImage,
      setMainImage,
      sizes,
      quantity,
      selectedSize,
      increaseQuantity,
      decreaseQuantity,
      selectSize,
      addToBag,
      toggleWishlist,
      isInWishlist,
      reviews,
      moreProducts
    }
  }
}
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-gallery {
  display: flex;
  gap: 1rem;
}

.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 60px;
}

.thumbnail-list img {
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 8px;
}

.thumbnail-list img.active {
  border-color: #000;
}

.main-image img {
  width: 700px;
  height: 400px;
  border-radius: 8px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.3rem 0;
}

.section-title {
  font-size: 1rem;
  margin: 0.8rem 0 0.4rem;
  font-weight: bold;
}

.size-selector {
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
}

.size-selector label {
  padding: 0.1rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.size-selector label.selected-size {
  border-color: #000;
  background-color: #f0f0f0;
}

.size-selector input[type='radio'] {
  display: none;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
}

.quantity-selector button {
  width: 30px;
  height: 20px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.8rem;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.add-to-bag {
  background-color: #000;
  color: #fff;
  padding: 0.3rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  max-width: 14rem;
  line-height: 1.8;
  flex-grow: 1;
}

.features {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  max-width: 400px;
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.feature i {
  font-size: 1.2rem;
}

.feature-text {
  display: flex;
  flex-direction: column;
}

.feature-title {
  font-weight: bold;
  font-size: 0.9rem;
}

.feature-subtext {
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.2rem;
}

.reviews-section {
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
}

.reviews-summary {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.review-card {
  border-top: 1px solid #ddd;
  padding: 1rem 0;
  font-size: 0.9rem;
}

.review-header {
  font-size: 1rem;
  font-weight: bold;
}

.review-text {
  margin: 0.5rem 0;
}

.review-purchase {
  font-size: 0.8rem;
  color: #666;
}

.review-details {
  display: flex;
  gap: 1rem;
  margin: 0.5rem 0;
  font-size: 0.8rem;
}

.review-ratings {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.8rem;
}

.more-products {
  margin-top: 0.3rem;
}

.more-products h3 {
  font-weight: bold;
}

.product-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.product-item {
  display: flex;
  align-items: center;
  border: 0.5px solid #c1c1c1;
  border-radius: 8px;
  padding: 0.5rem;
}

.product-item img {
  width: 110px;
  height: auto;
  border-radius: 8px;
  margin-right: 1rem;
}

.product-info {
  text-align: left;
}

.product-title {
  font-size: 0.8rem;
  font-weight: bold;
}

.product-price {
  font-size: 0.85rem;
  color: #7ada5d;
  margin-top: 0.5rem;
}

@media (max-width: 1024px) {
  .product-container {
    grid-template-columns: 1fr;
  }

  .main-image img {
    width: 100%;
    height: auto;
  }

  .features {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .image-gallery {
    flex-direction: column;
  }

  .thumbnail-list {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>
