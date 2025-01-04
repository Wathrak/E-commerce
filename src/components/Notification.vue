<template>
  <div
    class="bg-white w-[400px] h-screen flex flex-col gap-5 p-5 font-semibold"
  >
    <div
      class="flex text-3xl font-bold text-gray-600 pt-5 pb-5 justify-between"
    >
      <div>Notifications</div>
      <button @click="closeNotification">X</button>
    </div>
    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div>Looking For Modern Painting?</div>
    </div>
    <div class="text-gray-400">Come and check our last arrival</div>

    <button @click="handleButtonClick('/browse/walldecor')" class="button">
      Painting
    </button>

    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div class="font-semibold">Happy New Year with 10% Discount</div>
    </div>
    <div class="text-gray-400">
      Special Discount on Wall Decor and Furniture!!
    </div>

    <div class="flex justify-center">
      <button @click="handleButtonClick('/browse/walldecor')" class="button w-full">
        Wall Decor
      </button>
      <button @click="handleButtonClick('/browse/furnitures')" class="button w-full">
        Furniture
      </button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/store'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const productStore = useProductStore()
    const router = useRouter()

    const closeNotification = () => {
      productStore.clickNotification()
    }

    const handleButtonClick = (route) => {
      // Close the notification first
      closeNotification()

      // Navigate to the new route
      router.push(route)
    }

    return {
      productStore,
      closeNotification,
      handleButtonClick,
    }
  },
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
  cursor: pointer;
}
</style>
