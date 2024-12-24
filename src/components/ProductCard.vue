<template>
  <router-link :to="to">
    <div class="product-card-container flex justify-center overflow-hidden">
      <div
        class="product-card flex flex-col items-center justify-end h-[460px] w-[470px] bg-center"
        :style="{ backgroundImage: `url(${product.image})` }"
      >
        <div class="bg-white py-1 px-2 border">
          {{ product.name }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object,
    to: String,
  },
}
</script>

<style scoped>
.product-card-container {
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;
}
.product-card {
  text-align: center;
  background-size: 100%;
  transition-property: background-size;
  transition-duration: 1s;
  transition-delay: 1ms;
  padding: 10px;
}
.product-card:hover {
  background-size: 120%;
}
</style>
