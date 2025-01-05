<template>
  <div class="wishlist-container">
    <div class="wishlist-content">
      <h1 class="title">Aww... Snap. :( Your wish list is Empty!</h1>
      <p class="subtitle">Check out our latest arrivals and stay up to date with our latest style!</p>
      <p class="start-shopping" @click="navigateToShop">Start Shopping</p>
      <div class="category-buttons">
        <button
          v-for="category in categories"
          :key="category"
          @click="navigateToCategory(category)"
          class="category-button"

        >
          {{ category }}

        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const categories = ['Wall Decor', 'Lamps', 'Furnitures'];
const router = useRouter();

const navigateToShop = () => {
  console.log('Navigating to shop...');
  router.push('/browse');
};

const navigateToCategory = (category) => {
  const routePath = `/browse/${category.replace(' ', '').toLowerCase()}`;
  console.log(`Navigating to category: ${routePath}`);
  router.push(routePath);
};
</script>

<style scoped>
.wishlist-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 5vh 5vw;
  background-color: white;
}

.wishlist-content {
  max-width: 40rem;
  text-align: center;
  margin-top: 4rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.start-shopping {
  font-size: 1rem;
  color: black;
  cursor: pointer;
  margin-bottom: 2rem;
  font-weight: 500;
  display: inline-block;
}

.start-shopping:hover {
  text-decoration: underline;
}

.category-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.category-button {
  background-color: black;
  color: white;
  border-radius: 0.3125rem;
  padding: 0.4rem 7rem;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 70rem;
  height: auto;
  transition: opacity 0.2s ease;
  text-align: center;
  white-space: nowrap; /* Prevent line breaks */
}


.category-button:hover {
  opacity: 0.8;
}
</style>
