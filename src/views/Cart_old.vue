<template>
  <div class="cart-container">
    <div class="cart-header">
      <h2>Carts</h2>
      <button class="close-cart" @click="closeCart">X</button>
    </div>
    <div class="cart-content">
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="cart-item-image">
            <img :src="item.imageUrl" alt="Product Image" />
          </div>
          <div class="cart-item-details">
            <p class="cart-item-name">{{ item.name }}</p>
            <p class="cart-item-price">${{ (item.price * item.quantity).toFixed(2) }}</p>
            <div class="cart-item-quantity">
              <button @click="decreaseQuantity(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)">+</button>
            </div>
          </div>
        </div>
        <div class="cart-total">
          <p>Total: ${{ totalAmount.toFixed(2) }}</p>
        </div>
        <button class="checkout-button" @click="proceedToCheckout">Checkout</button>
      </div>
      <div v-else class="empty-cart">
        <p>Your bag is empty</p>
        <p>Check out our latest arrivals, stay up-to-date with our latest styles!</p>
        <button class="start-shopping-button" @click="navigateToShop">Start Shopping</button>
        <div class="category-buttons">
          <button class="category-button" @click="navigateToCategory('Wall Decor')">Wall Decor</button>
          <button class="category-button" @click="navigateToCategory('Furniture')">Furniture</button>
          <button class="category-button" @click="navigateToCategory('Lamps')">Lamps</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: "CartPage",
data() {
  return {
    cartItems: [], // Example cart items can be initialized for testing
  };
},
computed: {
  totalAmount() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
},
methods: {
  decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
  },
  increaseQuantity(item) {
    item.quantity++;
  },
  removeItem(item) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
  },
  proceedToCheckout() {
    console.log("Proceeding to checkout with items:", this.cartItems);
    // Add checkout logic here
  },
  navigateToShop() {
    console.log("Navigating to shop...");
    // Add navigation logic here
  },
  navigateToCategory(category) {
    console.log("Navigating to category: ${category}");
    // Add navigation logic here
  },
  closeCart() {
    console.log("Closing cart...");
    // Add logic to close/hide the cart modal
  },
},
};
</script>
<style scoped>
.cart-container {
  position: fixed; /* Fix the position on the screen */
  top: 0; /* Adjust based on your design */
  right: 0; /* Align it to the right */
  width: 400px; /* Set width for the container */
  height: 100%; /* Limit height */
  overflow-y: auto; /* Enable scrolling if content exceeds height */
  background: #f9f9f9;
  border-radius: 5px 0 0 5px; /* Rounded corners on the left side */
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.cart-header {
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
padding-bottom: 10px;
}

.close-cart {
background: transparent;
border: none;
font-size: 18px;
cursor: pointer;
}

.cart-content {
margin-top: 20px;
}

.cart-item {
display: flex;
align-items: center;
margin-bottom: 15px;
}

.cart-item-image img {
width: 70px;
height: 70px;
border-radius: 5px;
object-fit: cover;
}

.cart-item-details {
margin-left: 15px;
flex: 1;
}

.cart-item-name {
font-weight: bold;
font-size: 16px;
margin-bottom: 5px;
}

.cart-item-price {
color: #da292e;
font-weight: bold;
}

.cart-item-quantity {
display: flex;
align-items: center;
gap: 5px;
}

.cart-item-quantity button {
padding: 5px 10px;
font-size: 14px;
cursor: pointer;
}
.cart-total {
margin-top: 20px;
text-align: right;
font-weight: bold;
font-size: 18px;
}

.checkout-button {
width: 100%;
padding: 10px;
background: black;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
margin-top: 15px;
transition: background-color 0.3s ease;
}

.checkout-button:hover {
background-color: black;
}

.empty-cart {
text-align: center;
}

.start-shopping-button {
background-color: black;
color: white;
border: none;
padding: 10px 20px;
font-size: 16px;
border-radius: 5px;
cursor: pointer;
margin: 20px 0;
transition: background-color 0.3s ease;
}

.start-shopping-button:hover {
background-color: black;
}

.category-buttons {
display: flex;
justify-content: center;
gap: 10px;
}

.category-button {
padding: 8px 12px;
background: #f5f5f5;
border: 1px solid #ccc;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease, color 0.3s ease;
}

.category-button:hover {
background-color: black;
color: white;
}
</style>