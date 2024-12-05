<template>
  <div class="Lamps">
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
          name: "Lamp 1",
          category: "Lamps",
          image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Lamp 2",
          category: "Lamps",
          image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Lamp 3",
          category: "Lamps",
          image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 2,
          name: "Lamp 4",
          category: "Lamps",
          image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        
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

