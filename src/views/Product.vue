<template>
  <div class="product-container">
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

        <div class="reviews-section">
          <h3>Other Reviews from this Shop</h3>
          <div class="reviews-summary">
            <span>⭐⭐⭐⭐⭐ (2,993)</span>
          </div>
          <div
            class="review-card"
            v-for="(review, index) in reviews"
            :key="index"
          >
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
              <span>Shipping ⭐{{ review.shipping }}</span>
              <span>Customer Service ⭐{{ review.customerService }}</span>
            </div>
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
          @click="productStore2.selectSize(size)"
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

      <button class="add-to-bag" @click="addToBag">Add to bag</button>
      

      <div class="features">
        <!-- Features in a grid layout -->
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
            <small class="feature-subtext">Many forms</small>
          </div>
        </div>
      </div>
      <br />
      <div class="more-products">
        <h3>More Products</h3>
        <div class="product-list">
          <div
            class="product-item"
            v-for="(product, index) in moreProducts"
            :key="index"
          >
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
</template>

<script>
import { useCartStore } from '@/store/cartstores';
import { useProductStore2 } from '@/store/productstore'
import { computed, ref,} from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const cartStore = useCartStore()
    const productStore2 = useProductStore2()
    const route = useRoute()

    const category = route.params.category // Get category from URL
    const productId = Number(route.params.id) // Get product ID from URL

    // Filter the products based on the category and id
    const currentProduct = ref(
      productStore2.product.find(
        product => product.id === productId && product.category === category
      )
    )

    const mainImage = ref(currentProduct.value?.thumbnails[0])
    const setMainImage = thumb => {
      mainImage.value = thumb
    }

    const increaseQuantity = () => {
      productStore2.increaseQuantity()
    }
    const decreaseQuantity = () => {
      productStore2.decreaseQuantity()
    }

    const addToBag = () => {
      const productData = {
        id: currentProduct.value.id,
        name: currentProduct.value.name,
        price: currentProduct.value.price,
        size: productStore2.selectedSize,
        quantity: productStore2.quantity,
        image: mainImage.value,
      };

      cartStore.addProduct(productData); // Add product to the cart store

      alert(`${currentProduct.value.name} has been added to your bag!`);
    };

    

    const quantity = computed(() => productStore2.quantity)
    const sizes = computed(() => productStore2.sizes)
    const selectedSize = computed(() => productStore2.selectedSize)

    return {
      productStore2,
      currentProduct,
      mainImage,
      setMainImage,
      sizes,
      quantity,
      selectedSize,
      increaseQuantity,
      decreaseQuantity,
      addToBag,
      reviews: productStore2.reviews,
      moreProducts: productStore2.moreProducts,
    }
  },

}



</script>

<style scoped>
.more-products {
  margin-top: 0.3rem;
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
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  font-size: 0.9rem;
}

.review-header {
  font-size: 1rem;
  font-weight: bold;
}

.review-text {
  margin: 0.5rem 1;
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

.review-ratings span {
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.8\rem;
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

.expandable-sections {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  grid-column: 2 / 3;
}

.expandable-sections summary {
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
}

.product-container {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}
.image-gallery {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex: 1;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: auto;
  font-size: 0.9rem;
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
  display: inline-block;
  padding: 0.1rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
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

.add-to-bag {
  background-color: #000;
  color: #fff;
  padding: 0.3rem 4rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 0.9rem;
  width: auto;
}
</style>