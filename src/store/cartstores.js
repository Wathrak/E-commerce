import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
    isCartOpen: false,
  }),
  actions: {
    addProduct(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id && item.size === product.size);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cartItems.push(product);
      }
    },
    closeCart() {
      this.isCartOpen = false; // Update the state
    },
    openCart() {
      this.isCartOpen = true; // Optional: Open the cart
    },

  },
});