<template>
  <div class="wall-decor">
    <div class="product-grid">
      <ProductBrowse
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductBrowse from "@/components/ProductBrowse.vue";

export default {
  components: { ProductBrowse },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Wall Decor 1",
          category: "Wall Decor",
          image: "path/to/wall-decor1.jpg",
          rating: 4.5,
          shop: "Besdong Khmer",
          price: "KHR 100,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: "path/to/wall-decor2.jpg",
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: "path/to/wall-decor2.jpg",
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: "path/to/wall-decor2.jpg",
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: "path/to/wall-decor2.jpg",
          shop: "Besdong Khmer Company",
          price: "KHR 120,000",
        },
        // Add more wall decor products as needed
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
