<template>
  <div class="relative">
    <div
      class="h-[300px] bg-cover bg-center relative"
      style="
        background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/3a7586140073963.623b10f9b30a9.png');
        /* background-image: url('https://i.pinimg.com/originals/66/8f/08/668f08c281486c01eee91a9de92b9994.jpg'); */
      "
    >
      <div class="browse-header">
        <h1 class="text-4xl font-serif mb-4">{{ currentCategory }}</h1>
        <p class="items-center space-x-2 text-sm hover:underline">
          Home > {{ currentCategory }}
        </p>
      </div>
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
      <WallDecor v-if="currentCategory === 'Wall Decor'" />
      <Furniture v-if="currentCategory === 'Furnitures'" />
      <Lamp v-if="currentCategory === 'Lamps'" />
    </div>
    <Pagination />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import ProductBrowse from '@/components/ProductBrowse.vue'
import WallDecor from '@/components/Product_Category/WallDecor.vue'
import Lamp from '@/components/Product_Category/Lamp.vue'
import Furniture from '@/components/Product_Category/Furniture.vue'

export default {
  components: { Footer, ProductBrowse, WallDecor, Lamp, Furniture},
  data() {
    return {
      categories: ['Wall Decor', 'Lamps', 'Furnitures'],
      products: [],
    }
  },
  computed: {
    currentCategory() {
      const routeCategory = this.$route.params.category
      const formattedCategory = routeCategory
        ? routeCategory
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
        : 'Wall Decor'
      return this.categories.includes(formattedCategory)
        ? formattedCategory
        : 'Wall Decor'
    },
    filteredProducts() {
      return this.products.filter(
        product => product.category === this.currentCategory,
      )
    },
  },
  methods: {
    selectCategory(category) {
      // Update the route when a category is selected
      const routeCategory = category.toLowerCase().replace(/ /g, '-')
      this.$router.push(`/browse/${routeCategory}`)
    },
  },
}
</script>

<style scoped>
.browse-header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

.category-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  z-index: 5;
  position: relative;
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
