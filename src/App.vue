<template>
  <Navbar />

  <RouterView />
</template>

<script>
import { mapState } from 'pinia'
import Navbar from './components/Navbar.vue'
import { useProductStore } from './store'

export default {
  components: { Navbar },
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
