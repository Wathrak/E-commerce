<template>
    <div class="wishlist-container">
      <div class="wishlist-empty">
        <h1>Aww... Snap! :( Your Wishlist is Empty!</h1>
        <p>Check out our latest arrivals and stay up to date with our latest styles!</p>
        <button class="start-shopping-button" @click="navigateToShop">Start Shopping</button>
        <div class="category-buttons">
          <button class="category-button" @click="navigateToCategory('Wall Decor')">Wall Decor</button>
          <button class="category-button" @click="navigateToCategory('Furnitures')">Furnitures</button>
          <button class="category-button" @click="navigateToCategory('Lamps')">Lamps</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'WishlistPage',
    methods: {
      navigateToShop() {
        console.log('Navigating to shop...');
        // Implement logic to navigate to the shop page
      },
      navigateToCategory(category) {
        console.log("Navigating to category: ${category}");
        // Implement logic to navigate to the specific category page
      },
    },
  };
  </script>
  <style scoped>
  /* Wishlist Container */
  .wishlist-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  /* Empty Wishlist Section */
  .wishlist-empty {
    max-width: 500px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }
  
  /* Start Shopping Button */
  .start-shopping-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
  }
  
  .start-shopping-button:hover {
    background-color: black;
  }
  
  /* Category Buttons */
  .category-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .category-button {
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .category-button:hover {
    background-color: black;
    color: white;
  }
  </style>