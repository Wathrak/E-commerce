<template>
  <div
    class="border-b border-gray-200 h-[65px] text-center items-center align-middle"
  >
    <nav class="container mx-auto px-4 py-4 h-[65px]">
      <div class="flex items-center justify-between">
        <!-- Left Navigation -->
        <div class="flex items-center space-x-8">
          <RouterLink
            to="/browse/wall-decor"
            class="text-gray-800 hover:text-gray-600 w-[95px]"
            >WALL DECOR</RouterLink
          >
          <RouterLink
            to="/browse/lamps"
            class="text-gray-800 hover:text-gray-600"
            >LAMPS</RouterLink
          >
          <RouterLink
            to="/browse/furniture"
            class="text-gray-800 hover:text-gray-600"
            >FURNITURES</RouterLink
          >
        </div>

        <!-- Logo -->
        <div class="text-2xl font-serif min-w-[150px]">
          <RouterLink to="/">PTES SART</RouterLink>
        </div>

        <!-- Right Navigation -->
        <div class="flex items-center space-x-6">
          <div class="relative">
            <input
              type="search"
              placeholder="Search"
              v-model="searchQuery"
              @input="handleSearch"
              class="pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>
          <button @click="productStore.clickNotification" class="icon-button">
            <Icon icon="mdi:bell-outline" width="24" height="24" />
          </button>

          <RouterLink to="/wishlist">
            <button class="icon-button">
              <Icon icon="mdi:heart-outline" width="24" height="24" />
            </button>
          </RouterLink>

          <button @click="productStore.clickCart" class="icon-button">
            <Icon icon="uil:cart" width="24" height="24" />
          </button>

          <div class="text-sm font-medium flex items-center">
            <div class="space-x-4">
              <button @click="handleLogout">LOGOUT</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from '@/router'
import { useProductStore } from '@/store'

export default {
  setup() {
    const productStore = useProductStore()

    const handleLogout = () => {
      productStore.logout()
      router.push('/login')
    }

    return {
      productStore,
      handleLogout,
    }
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    handleSearch() {
      if (this.searchQuery) {
        this.$router.push({ path: '/browse', query: { search: this.searchQuery } })
      } else {
        this.$router.push({ path: '/browse' })
      }
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Ensures a consistent width */
  height: 40px; /* Ensures a consistent height */
  border-radius: 50%; /* Optional, for a circular button look */
  padding: 0;
}

.nav-links,
.auth-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links li a,
.auth-links a {
  text-decoration: none;
  color: #333;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
</style>
