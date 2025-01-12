<template>
  <div class="Furnitures">
    <div class="product-grid">
      <ProductBrowse
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import { useBrowseStore } from "@/store/browsestore";
import ProductBrowse from "@/components/ProductBrowse.vue";
import { computed } from "vue";
export default {
  components: { ProductBrowse },
  setup() {
    const browseStore = useBrowseStore();
    const paginatedProducts = computed(() => browseStore.paginatedProducts);
    const currentPage = computed(() => browseStore.currentPage);
    const totalPages = computed(() => Math.ceil(browseStore.furnitures.length / browseStore.itemsPerPage));

    const prevPage = () => {
      if (browseStore.currentPage > 1) {
        browseStore.setPage(browseStore.currentPage - 1);
      }
    };

    const nextPage = () => {
      if (browseStore.currentPage < totalPages.value) {
        browseStore.setPage(browseStore.currentPage + 1);
      }
    };

    return {
      paginatedProducts,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
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
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

