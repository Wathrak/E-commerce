<template>
  <div class="bg-white w-[400px] h-screen flex flex-col gap-5 p-5 font-semibold">
    <div class="flex text-3xl font-bold text-gray-600 pt-5 pb-5 justify-between">
      <button @click="closeCart">X</button>
      <div>Cart</div>
      <button>
        <Icon icon="lucide:heart" class="w-6 h-6" />
      </button>
    </div>
    <hr />
    <!-- Empty Cart Content -->
    <div class="flex flex-col items-center justify-start flex-1 px-4 text-center mt-4">
      <h2 class="text-2xl font-medium text-gray-700 mb-2">Your bag is empty</h2>
      <p class="text-gray-500 mb-8">
        Check out our latest arrivals stay up-to-date with latest style
      </p>

      <div class="w-full space-y-3 max-w-sm">
        <h3 class="text-xl font-medium mb-4">Start Shopping!!</h3>
        <div class="flex justify-center">
          <button @click="handleButtonClick('/browse/walldecor')" class="button w-full">
            Wall Decor
          </button>
          <button @click="handleButtonClick('/browse/furnitures')" class="button w-full">
            Furniture
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useProductStore } from '@/store'
import { useRouter } from 'vue-router'

const productStore = useProductStore()
const router = useRouter()

const closeCart = () => {
  productStore.clickCart()
}

const handleButtonClick = (route) => {
  // Close the cart first
  closeCart()

  // Navigate to the new route
  router.push(route)
}
</script>

<style scoped>
.button {
  background-color: black;
  color: white;
  font-weight: 500;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
