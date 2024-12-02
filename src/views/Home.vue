<template>
  <div class="text-center">
    <LandingImage />
    <BannerItem />

    <div class="product-section m-5">
      <div class="product-grid flex justify-center">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>

    <Banner2 />
    <ProductCard2 />
    <Footer />
  </div>
</template>

<script>
import Banner2 from '@/components/Banner2.vue'
import BannerItem from '@/components/BannerItem.vue'
import Footer from '@/components/Footer.vue'
import LandingImage from '@/components/LandingImage.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCard2 from '@/components/ProductCard2.vue'

export default {
  name: 'HomePage',
  components: {
    BannerItem,
    ProductCard,
    LandingImage,
    Banner2,
    ProductCard2,
    Footer,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Candle Stand',
          image: './src/assets/images/candle-stand.png',
        },
        {
          id: 2,
          name: 'Plant Pot',
          image: './src/assets/images/plant-pot.png',
        },
        {
          id: 3,
          name: 'Painting',
          image: './src/assets/images/painting.png',
        },
        {
          id: 4,
          name: 'Table',
          image: './src/assets/images/table.png',
        },
      ],
    }
  },
}
</script>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35%, 0.4fr));
  gap: 40px;
}
</style>
