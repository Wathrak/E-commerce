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
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image1.png', import.meta.url).href,
          rating: 4.5,
          shop: "Besdong Khmer",
          price: "KHR 100,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 3,
          name: "Wall Decor 3",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 4,
          name: "Wall Decor 4",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image1.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 120,000",
        },
        {
          id: 5,
          name: "Wall Decor 5",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image2.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 130,000",
        },
        {
          id: 6,
          name: "Wall Decor 6",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image3.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 140,000",
        },
        {
          id: 7,
          name: "Wall Decor 7",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image4.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 150,000",
        },
        {
          id: 8,
          name: "Wall Decor 8",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image5.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 160,000",
        },
        {
          id: 9,
          name: "Wall Decor 9",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image6.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 170,000",
        },
        {
          id: 10,
          name: "Wall Decor 10",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image7.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 180,000",
        },
        {
          id: 11,
          name: "Wall Decor 11",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image8.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 190,000",
        },
        {
          id: 12,
          name: "Wall Decor 12",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image9.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 200,000",
        },
        {
          id: 13,
          name: "Wall Decor 13",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image10.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 210,000",
        },
        {
          id: 14,
          name: "Wall Decor 14",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image11.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 220,000",
        },
        {
          id: 15,
          name: "Wall Decor 15",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image12.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 230,000",
        },
        {
          id: 16,
          name: "Wall Decor 16",
          category: "Wall Decor",
          image: new URL('@/assets/images/ProductBrowse/WallDecor/image12.png', import.meta.url).href,
          shop: "Besdong Khmer",
          price: "KHR 230,000",
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
