<template>
  <div
    class="product-card flex flex-col items-center justify-end w-auto h-[25rem] bg-center bg-cover"
    :style="{ backgroundImage: `url(${product.image})` }"
  >
    <div class="bg-white py-1 px-2 border">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
}
</script>

<style scoped>
.product-card {
  padding: 0.6rem;
  text-align: center;
  background-size: 100%;
  transition-property: background-size;
  transition-duration: 1s;
  transition-delay: 1ms;
}
.product-card:hover {
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
  background-size: 120%;
}
</style>
