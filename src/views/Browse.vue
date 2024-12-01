<template>
  <div>
    <Navbar />
    <div class="browse-header">
      <h1>{{ currentCategory }}</h1>
      <p>Home > {{ currentCategory }}</p>
    </div>
    <div class="category-selector">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: category === currentCategory }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    <div class="product-grid">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { Navbar, Footer, ProductCard },
  data() {
    return {
      currentCategory: "Wall Decor",
      categories: ["Wall Decor", "Lamps", "Furnitures"],
      products: [
        {
          id: 1,
          name: "Wall Decor 1",
          category: "Wall Decor",
          image: "path/to/wall-decor1.jpg",
          price: "KHR 100,000",
        },
        {
          id: 2,
          name: "Wall Decor 2",
          category: "Wall Decor",
          image: "path/to/wall-decor2.jpg",
          price: "KHR 100,000",
        },
        {
          id: 3,
          name: "Lamp 1",
          category: "Lamps",
          image: "path/to/lamp1.jpg",
          price: "KHR 80,000",
        },
        {
          id: 4,
          name: "Furniture 1",
          category: "Furnitures",
          image: "path/to/furniture1.jpg",
          price: "KHR 300,000",
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(
        (product) => product.category === this.currentCategory
      );
    },
  },
  methods: {
    selectCategory(category) {
      this.currentCategory = category;
    },
  },
};
</script>

<style scoped>
.browse-header {
  text-align: center;
  margin: 20px 0;
}
.category-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.category-selector button {
  padding: 10px 20px;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
}
.category-selector button.active {
  background-color: black;
  color: white;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
