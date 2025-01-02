<template>
  <div class="product-browse" @click="navigateToProduct">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <div
      v-if="product.rating !== undefined && product.rating !== null"
      class="star-rating"
    >
      <span
        v-for="star in 5"
        :key="star"
        :class="{
          'filled': star <= Math.floor(product.rating),
          'half': star === Math.ceil(product.rating) && !Number.isInteger(product.rating),
        }"
        class="star"
      >
        ★
      </span>
    </div>
    <p>{{ product.shop }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    navigateToProduct() {
      this.$router.push(`/product/${this.product.id}`);
    },
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
.star-rating {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  gap: 5px;
}
.star {
  font-size: 23px;
  color: #ddd;
  position: relative;
  text-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.3),
    0px 0px 2px rgba(0, 0, 0, 0.2);
}
.star.filled {
  color: #212529;
}
.star.half {
  position: relative;
  color: #ddd;
}
.star.half::before {
  content: "★";
  color: #212529;
  position: absolute;
  left: 0;
  width: 50%;
  overflow: hidden;
  z-index: 1;
  text-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.3),
    0px 0px 2px rgba(0, 0, 0, 0.2);
}
</style>
