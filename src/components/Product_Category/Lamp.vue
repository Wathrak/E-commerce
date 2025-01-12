<template>
  <div class="Lamps">
    <div class="product-grid">
      <ProductBrowse
        v-for="product in lamps"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useBrowseStore } from '@/store/browsestore'
import ProductBrowse from '@/components/Product_Category/ProductBrowse.vue'

export default {
  components: { ProductBrowse },
  setup() {
    const browseStore = useBrowseStore()
    return {
      lamps: browseStore.lamps,
    }
  },
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
