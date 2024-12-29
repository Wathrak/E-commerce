<template>
  <Navbar class="fixed top-0 left-0 w-full z-10 bg-white" />

  <div class="relative">
    <Notification
      :class="[
        'z-10 top-0 right-0 fixed',
        productStore.isNotificationActive ? 'fixed' : 'hidden',
      ]"
    />

    <div
      :class="[
        'text-center z-0 absolute top-0 w-full mt-[65px]',
        productStore.isNotificationActive
          ? 'opacity-35 pointer-events-none'
          : 'opacity-100',
      ]"
    >
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Notification from '@/components/Notification.vue'
import { useProductStore } from '@/store'
import { ref, watch } from 'vue'

export default {
  components: { Navbar, Notification },

  setup() {
    const productStore = useProductStore()

    return {
      productStore,
    }
  },
}
</script>

<style>
.nav-links a {
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
}

.search-input {
  margin: 0 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
