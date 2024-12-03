<template>
  <div class="product-browse">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-browse {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  transition: box-shadow 0.3s;
}
.product-browse img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
.product-browse:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
