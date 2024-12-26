<template>
  <div
    class="bg-white w-[400px] h-screen flex flex-col gap-5 p-5 font-semibold"
  >
    <div
      class="flex text-3xl font-bold text-gray-600 pt-5 pb-5 justify-between"
    >
      <div>Notifications</div>
      <button @click="productStore.clickNotification">X</button>
    </div>
    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div>Looking For Modern Painting?</div>
    </div>
    <div class="text-gray-400">Come and check our last arrival</div>

    <RouterLink to="/browse/walldecor" class="button">
      <button>Painting</button>
    </RouterLink>

    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div class="font-semibold">Happy New Year with 10% Discount</div>
    </div>
    <div class="text-gray-400">
      Special Discount on Wall Decor and Furniture!!
    </div>

    <div class="flex justify-center">
      <RouterLink to="/browse/walldecor" class="button w-full">
        <button>Wall Decor</button>
      </RouterLink>
      <RouterLink to="/browse/walldecor" class="button w-full">
        <button>Furniture</button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/store'

export default {
  setup() {
    const productStore = useProductStore()

    return {
      productStore,
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
}
</style>
