<template>
  <div class="Furnitures">
    <div class="product-grid">
      <ProductBrowse
      v-for="product in furnitures"
        :key="product.id"
        :product="product"
      />
    </div>

  </div>
</template>

<script>
import { useBrowseStore } from "@/store/browsestore";
import ProductBrowse from "@/components/ProductBrowse.vue";

export default {
  components: { ProductBrowse },
  setup() {
    const browseStore = useBrowseStore()
    return {
      furnitures: browseStore.furnitures,
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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

