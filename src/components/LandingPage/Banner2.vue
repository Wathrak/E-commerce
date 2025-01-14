<template>
  <div class="text-center font-semibold mt-10">
    <div class="flex flex-col">
      <span class="text-[28px]">Wall Decor</span>
      <span class="text-[1rem] italic text-gray-400"
        >Top Sale in this week</span
      >
    </div>
    <div class="mb-5">
      <button
        v-for="(category, index) in productStore.categories"
        :key="index"
        class="btn inline-flex mt-5 text-gray-500 p-3"
      >
        <div>
          <button @click="productStore.clickCategory(category.name)">
            {{ category.name }}
          </button>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '@/store'
import { Icon } from '@iconify/vue'
import { emit } from 'process'
export default {
  components: { Icon },
  setup() {
    const productStore = useProductStore()
    return {
      productStore,
    }
  },
}
</script>
<style>
.btn {
  border: 1px solid white;
}
.btn:hover {
  border: 1px solid black;
  border-radius: 2rem;
}
</style>
