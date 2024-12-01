<template>
  <div>
    <Navbar />
    <Carousel />
    <h1>Steel Moving Gear Clock</h1>
    <FeaturesList />
    <div class="product-section">
      <h2>Candle Stands</h2>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Carousel from '@/components/Carousel.vue';
import FeaturesList from '@/components/FeaturesList.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  components: { Navbar, Footer, Carousel, FeaturesList, ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Candle Stand', image: 'path/to/image1.jpg', price: '$100' },
        { id: 2, name: 'Candle Stand', image: 'path/to/image2.jpg', price: '$120' },
      ],
    };
  },
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
