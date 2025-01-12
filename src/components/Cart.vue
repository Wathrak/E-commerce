<template>
  <div
    class="bg-white w-[400px] h-screen flex flex-col gap-5 p-5 font-semibold"
  >
    <div
      class="flex text-3xl font-bold text-gray-600 pt-5 pb-5 justify-between"
    >
      <button @click="closeCart">X</button>
      <div>Cart</div>
      <button>
        <Icon icon="lucide:heart" class="w-6 h-6" />
      </button>
    </div>
    <hr />
    <div
      v-if="cartItems.length === 0"
      class="flex flex-col items-center justify-start flex-1 px-4 text-center mt-4"
    >
      <!-- Empty Cart Content -->
      <h2 class="text-2xl font-medium text-gray-700 mb-2">Your bag is empty</h2>
      <p class="text-gray-500 mb-8">
        Check out our latest arrivals stay up-to-date with latest style
      </p>
      <div class="w-full space-y-3">
        <h3 class="text-xl font-medium mb-4">Start Shopping!!</h3>
        <div class="flex justify-center">
          <div class="flex flex-col gap-3 w-full">
            <button
              @click="handleButtonClick('/browse/walldecor')"
              class="button"
            >
              Wall Decor
            </button>
            <button @click="handleButtonClick('/browse/lamps')" class="button">
              Lamp
            </button>
            <button
              @click="handleButtonClick('/browse/furnitures')"
              class="button"
            >
              Furniture
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col gap-4">
      <!-- Cart Items -->
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="flex items-center justify-between border-b pb-4"
      >
        <img
          :src="item.image"
          alt="Product Image"
          class="w-16 h-16 rounded-md"
        />
        <div class="flex-1 px-4">
          <h3 class="text-lg font-medium">{{ item.name }}</h3>
          <p class="text-gray-500">Size: {{ item.size }}</p>
          <div class="flex items-center">
            <button @click="decreaseQuantity(index)">-</button>
            <p class="text-gray-500 mx-2">Quantity: {{ item.quantity }}</p>
            <button @click="increaseQuantity(index)">+</button>
          </div>
        </div>
        <p class="text-gray-700 font-semibold">{{ item.price }}</p>
        <button @click="removeItem(index)">Remove</button>
      </div>

      <!-- Proceed to Checkout Button -->
      <button class="button" @click="proceedToCheckout">
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useCartStore } from '@/store/cartstores'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/store'
// import { useProductStore } from '@/store/productstore';

const productStore = useProductStore()
const cartStore = useCartStore() // Import cart store
const router = useRouter()

const cartItems = cartStore.cartItems // Access cart items from the store

const closeCart = () => {
  productStore.clickCart()
}

const handleButtonClick = route => {
  closeCart()
  router.push(route)
}

const increaseQuantity = index => {
  cartStore.increaseQuantity(index)
}

const decreaseQuantity = index => {
  cartStore.decreaseQuantity(index)
}

const removeItem = index => {
  cartStore.removeItem(index)
}

const proceedToCheckout = () => {
  router.push('/checkout')
}
</script>

<style scoped>
.button {
  background-color: black;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.3125rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  max-width: 95%;
  min-width: 75%;
  margin-inline: auto;
}
</style>
