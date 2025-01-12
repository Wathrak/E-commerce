<template>
  <div class="Furnitures">
    <div class="product-grid">
      <ProductBrowse
<<<<<<< HEAD
        v-for="product in furnitures"
=======
      v-for="product in furnitures"
>>>>>>> 44a09998b44ed9f7b62dec8dfb287d5aa3e6378d
        :key="product.id"
        :product="product"
      />
    </div>
<<<<<<< HEAD
=======

>>>>>>> 44a09998b44ed9f7b62dec8dfb287d5aa3e6378d
  </div>
</template>

<script>
<<<<<<< HEAD
import { useBrowseStore } from '@/store/browsestore'
import ProductBrowse from '@/components/Product_Category/ProductBrowse.vue'
=======
import { useBrowseStore } from "@/store/browsestore";
import ProductBrowse from "@/components/ProductBrowse.vue";
>>>>>>> 44a09998b44ed9f7b62dec8dfb287d5aa3e6378d

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
