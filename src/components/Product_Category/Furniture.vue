<template>
  <div class="Furnitures">
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
          name: "Furniture 1",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 100,000",
        },
        {
          id: 2,
          name: "Furniture 2",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 3,
          name: "Furniture 3",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 4,
          name: "Furniture 5",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 5,
          name: "Furniture 6",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image2.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 130,000",
        },
        {
          id: 6,
          name: "Furniture 7",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image3.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 140,000",
        },
        {
          id: 7,
          name: "Furniture 8",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image4.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 150,000",
        },
        {
          id: 8,
          name: "Furniture 9",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image5.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 160,000",
        },
        {
          id: 9,
          name: "Furniture 10",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image6.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 170,000",
        },
        {
          id: 10,
          name: "Furniture 11",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image7.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 180,000",
        },
        {
          id: 11,
          name: "Furniture 12",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image8.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 190,000",
        },
        {
          id: 12,
          name: "Furniture 13",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image9.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 200,000",
        },
        {
          id: 13,
          name: "Furniture 14",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image10.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 210,000",
        },
        {
          id: 14,
          name: "Furniture 15",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image11.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 220,000",
        },
        {
          id: 15,
          name: "Furniture 16",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image12.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 230,000",
        },
        {
          id: 16,
          name: "Furniture 17",
          category: "Furnitures",
          image: new URL('@/assets/images/ProductBrowse/Furnitures/image13.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 240,000",
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

