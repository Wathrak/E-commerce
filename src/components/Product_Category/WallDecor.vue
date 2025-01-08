<template>
  <div class="wall-decor">
    <div class="product-grid">
      <ProductBrowse
        v-for="product in walldecors"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useBrowseStore } from '@/store/browsestore'
import ProductBrowse from '@/components/ProductBrowse.vue'

export default {
  components: { ProductBrowse },
  setup() {
    const browseStore = useBrowseStore()
    return {
      walldecors: browseStore.walldecors,
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
