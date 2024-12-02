<template>
  <div class="text-center font-semibold mt-10">
    <div class="flex flex-col">
      <span class="text-[28px]">Wall Decor</span>
      <span class="text-[1rem] italic text-gray-400"
        >Top Sale in this week</span
      >
    </div>
    <button
      v-for="(category, index) in categories"
      :key="index"
      class="btn inline-flex mt-5 text-gray-500 p-3"
    >
      {{ category }}
    </button>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: { Icon },
  data() {
    return {
      categories: [
        'Canvas Wall Art',
        'Hand Painted Wall Art',
        'Shadow Boxes',
        'Metal Wall Art',
      ],
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
