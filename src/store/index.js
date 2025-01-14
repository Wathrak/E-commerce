// src/store/index.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    isNotificationActive: false,
    isCartActive: false, // Ensure this state is defined
    darkmode: false,
    selectedCategory: '',
    wishlist: [],
    categories: [
      { id: 1, name: 'Designer Wall Clock' },
      { id: 2, name: 'Canvas Wall Art' },
      { id: 3, name: 'Horses' },
      { id: 4, name: 'Vases' },
    ],
    products: [
      { id: 1, name: 'Candle Stand', image: './src/assets/images/candle-stand.png', category: 'lamps' },
      { id: 2, name: 'Plant Pot', image: './src/assets/images/plant-pot.png', category: 'wall-decor' },
      { id: 3, name: 'Painting', image: './src/assets/images/painting.png', category: 'wall-decor' },
      { id: 4, name: 'Table', image: './src/assets/images/table.png', category: 'furnitures' },
    ],
    items: [
      { id: 1, imgUrl: '../src/assets/images/GlassPainting/glasspainting1.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 100,000', category: 'Canvas Wall Art' },
      { id: 2, imgUrl: '../src/assets/images/GlassPainting/glasspainting2.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 120,000', category: 'Canvas Wall Art' },
      { id: 3, imgUrl: '../src/assets/images/GlassPainting/glasspainting3.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 110,000', category: 'Canvas Wall Art' },
      { id: 4, imgUrl: '../src/assets/images/GlassPainting/glasspainting4.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 130,000', category: 'Canvas Wall Art' },
      { id: 5, imgUrl: '../src/assets/images/GlassPainting/glasspainting5.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 140,000', category: 'Canvas Wall Art' },
      { id: 6, imgUrl: '../src/assets/images/GlassPainting/glasspainting6.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 150,000', category: 'Canvas Wall Art' },
      { id: 7, imgUrl: '../src/assets/images/Vases/vase1.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 8, imgUrl: '../src/assets/images/Vases/vase2.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 9, imgUrl: '../src/assets/images/Vases/vase3.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 10, imgUrl: '../src/assets/images/Vases/vase4.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 11, imgUrl: '../src/assets/images/Vases/vase5.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 12, imgUrl: '../src/assets/images/Vases/vase6.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 75,000', category: 'Vases' },
      { id: 13, imgUrl: '../src/assets/images/Horse/horse1.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 110,000', category: 'Horses' },
      { id: 14, imgUrl: '../src/assets/images/Horse/horse2.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 110,000', category: 'Horses' },
      { id: 15, imgUrl: '../src/assets/images/Horse/horse3.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 110,000', category: 'Horses' },
      { id: 16, imgUrl: '../src/assets/images/Horse/horse4.png', title: "Nature's Poetry Crystal Glass Paintings", price: 'KHR. 110,000', category: 'Horses' },
    ],
  }),

  actions: {
    login() {
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
    },
    logout() {
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn')
    },
    clickNotification() {
      this.isNotificationActive = !this.isNotificationActive
    },
    clickCart() {
      this.isCartActive = !this.isCartActive
    },
    closeCart() {
      this.isCartActive = false
    },
    darkmodeToggle() {
      this.darkmode = !this.darkmode
    },
    clickCategory(category) {
      this.selectedCategory = category
    },
    addToWishlist(product) {
      if (!this.wishlist.find(item => item.id === product.id)) {
        this.wishlist.push(product)
      }
    },
    removeFromWishlist(productId) {
      this.wishlist = this.wishlist.filter(item => item.id !== productId)
    },
  },

  getters: {
    filteredItems(state) {
      if (!state.selectedCategory) {
        return state.items.slice(0, 6)
      }
      return state.items.filter(
        item => item.category.toLowerCase() === state.selectedCategory.toLowerCase()
      )
    },
    isInWishlist: (state) => (productId) => {
      return state.wishlist.some(item => item.id === productId)
    }
  },
})
