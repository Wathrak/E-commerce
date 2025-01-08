<template>
  <div id="app">
    <h1>Product Listing</h1>

    <!-- Filters Section -->
    <div class="filter-bar">
      <label>
        Min Price:
        <input type="number" v-model="filters.minPrice" placeholder="0" />
      </label>
      <label>
        Max Price:
        <input type="number" v-model="filters.maxPrice" placeholder="1000" />
      </label>
      <label>
        Min Rating:
        <select v-model="filters.minRating">
          <option value="">Any</option>
          <option v-for="rating in [5, 4, 3, 2, 1]" :key="rating" :value="rating">
            {{ rating }}+
          </option>
        </select>
      </label>
    </div>

    <!-- Item Count -->
    <div class="item-count">
      Showing {{ displayedItemCount }} of {{ products.length }} results
    </div>

    <!-- Product List -->
    <div class="product-list">
      <div class="product-item" v-for="product in filteredProducts" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.price }}</p>
        <p>Rating: {{ product.rating }} stars</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // List of products
      products: [
        { id: 1, name: "Product A", price: "$100", rating: 4 },
        { id: 2, name: "Product B", price: "$200", rating: 5 },
        { id: 3, name: "Product C", price: "$150", rating: 3 },
        { id: 4, name: "Product D", price: "$250", rating: 2 },
        { id: 5, name: "Product E", price: "$300", rating: 4 },
      ],
      // Filters
      filters: {
        minPrice: null,
        maxPrice: null,
        minRating: null,
      },
    };
  },
  computed: {
    // Filtered product list based on the filters
    filteredProducts() {
      return this.products.filter((product) => {
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ''));
        return (
          (!this.filters.minPrice || price >= this.filters.minPrice) &&
          (!this.filters.maxPrice || price <= this.filters.maxPrice) &&
          (!this.filters.minRating || product.rating >= this.filters.minRating)
        );
      });
    },
    // Count of displayed products
    displayedItemCount() {
      return this.filteredProducts.length;
    },
  },
};
</script>

<style>
/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

/* Filter bar styling */
.filter-bar {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}
.filter-bar label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

/* Item count styling */
.item-count {
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
}

/* Product list styling */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
}
.product-item h3 {
  margin: 10px 0;
}
</style> 
