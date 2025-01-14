<template>
  <div class="relative">
    <div
      class="h-[300px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${browseBanner})` }"
    >
      <!-- Overlay for opacity -->
      <div class="overlay"></div>
      <div class="browse-header">
        <h1 class="text-4xl font-serif mb-4">{{ currentCategory || 'All' }}</h1>
        <p class="items-center space-x-2 text-sm hover:underline">
          Home > {{ currentCategory || 'All' }}
        </p>
      </div>
    </div>

    <div class="relative px-8 py-4">
      <div class="category-selector">
        <button
          :class="{ active: !currentCategory }"
          @click="selectCategory('All')"
        >
          All
        </button>
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: category === currentCategory }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Dropdown filter button -->
      <div class="filter-dropdown">
        <select v-model="selectedFilter" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
          <option value="default">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="highest-rating">Highest Rating</option>
        </select>
      </div>
    </div>

    <div class="product-grid">
      <ProductBrowse
        v-for="product in sortedFilteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Footer from '@/components/Footer.vue'
import ProductBrowse from '@/components/Product_Category/ProductBrowse.vue'
import WallDecor from '@/components/Product_Category/WallDecor.vue'
import Lamp from '@/components/Product_Category/Lamp.vue'
import Furniture from '@/components/Product_Category/Furniture.vue'
import { useSharedStore } from '@/store/sharedstore'

// Import the image
import browseBanner from '@/assets/images/BrowseBanner.png'

export default {
  components: { Footer, ProductBrowse, WallDecor, Lamp, Furniture },
  setup() {
    const sharedStore = useSharedStore()
    const categories = ref(['Wall Decor', 'Lamps', 'Furniture'])
    const selectedFilter = ref('default')
    const route = useRoute()
    const router = useRouter()

    // Initialize search query
    const searchQuery = ref(route.query.search || '')

    const currentCategory = computed(() => {
      const routeCategory = route.params.category
      const formattedCategory = routeCategory
        ? routeCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
        : null
      return categories.value.includes(formattedCategory)
        ? formattedCategory
        : null
    })

    const filteredProducts = computed(() => {
      let products = sharedStore.products
      if (currentCategory.value) {
        products = products.filter(
          product => product.category === currentCategory.value,
        )
      }
      if (searchQuery.value) {
        products = products.filter(product =>
          product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      }
      return products
    })

    const sortedFilteredProducts = computed(() => {
      let sortedProducts = [...filteredProducts.value]
      if (selectedFilter.value === 'low-to-high') {
        sortedProducts.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, ''), 10) - parseInt(b.price.replace(/[^0-9]/g, ''), 10))
      } else if (selectedFilter.value === 'high-to-low') {
        sortedProducts.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, ''), 10) - parseInt(a.price.replace(/[^0-9]/g, ''), 10))
      } else if (selectedFilter.value === 'highest-rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating)
      }
      return sortedProducts
    })

    const selectCategory = (category) => {
      if (category === 'All') {
        router.push('/browse')
      } else {
        const routeCategory = category.toLowerCase().replace(/ /g, '-')
        router.push(`/browse/${routeCategory}`)
      }
    }

    // Watch for changes in the route's query parameters and params
    watch(
      () => [route.query.search, route.params.category],
      ([newSearchQuery, newCategory]) => {
        searchQuery.value = newSearchQuery || ''
        const formattedCategory = newCategory
          ? newCategory.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
          : null
        if (categories.value.includes(formattedCategory)) {
          currentCategory.value = formattedCategory
        } else {
          currentCategory.value = null
        }
      },
      { immediate: true }
    )

    return {
      categories,
      currentCategory,
      selectedFilter,
      sortedFilteredProducts,
      selectCategory,
      searchQuery,
      browseBanner,
    }
  }
}
</script>

<style scoped>
.browse-header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #F8F9FA;
  z-index: 10;
}

.category-selector {
  display: flex;
  justify-content: center;
  gap: 10px;
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

.filter-dropdown {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Overlay for the background image */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* 20% black overlay */
  z-index: 5; /* Ensure the overlay is behind the header content */
}
</style>
