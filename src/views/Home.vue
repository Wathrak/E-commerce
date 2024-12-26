<template>
  <div class="relative">
    <div class="text-center z-0 absolute">
      <LandingImage />
      <BannerItem />

      <div class="product-section m-5">
        <div class="product-grid flex justify-center">
          <ProductCard
            v-for="product in Products"
            :key="product.id"
            :product="product"
            :to="`/browse/${product.category}`"
          />
        </div>
      </div>

      <Banner2 />

      <div class="flex flex-wrap gap-[20px] justify-center">
        <ProductCard2
          v-for="item in Items"
          :key="item.id"
          :item="item"
          class="grid-item"
          :to="`/browse/${item.category}`"
          toButton="/checkout"
        />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Banner2 from '@/components/Banner2.vue'
import BannerItem from '@/components/BannerItem.vue'
import Footer from '@/components/Footer.vue'
import LandingImage from '@/components/LandingImage.vue'
import Notification from '@/components/Notification.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCard2 from '@/components/ProductCard2.vue'
import { useProductStore } from '@/store'
import { mapState } from 'pinia'

export default {
  setup() {
    const productStore = useProductStore()

    return {
      productStore,
    }
  },

  name: 'HomePage',
  components: {
    BannerItem,
    ProductCard,
    LandingImage,
    Banner2,
    ProductCard2,
    Footer,
  },

  computed: {
    ...mapState(useProductStore, { Products: 'products' }),
    ...mapState(useProductStore, { Items: 'items' }),
  },

  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35%, 0.4fr));
  gap: 40px;
}

.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: start;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: fit-content;
}
</style>
