import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [], // Load cart items from localStorage
    isCartOpen: false,
  }),
  actions: {
    // Add a product to the cart
    addProduct(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id && item.size === product.size);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
      }
      this.saveCartToLocalStorage();
    },

    // Remove an item from the cart
    removeItem(index) {
      this.cartItems.splice(index, 1);
      this.saveCartToLocalStorage();
    },

    // Update an item in the cart
    updateCartItem(index, item) {
      this.cartItems[index] = item;
      this.saveCartToLocalStorage();
    },

    // Save cart items to localStorage
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    },

    // Clear the cart and localStorage
    clearCart() {
      this.cartItems = [];
      localStorage.removeItem('cartItems');
    },

    // Open the cart
    openCart() {
      this.isCartOpen = true;
    },

    // Close the cart
    closeCart() {
      this.isCartOpen = false;
    },
  },
});
