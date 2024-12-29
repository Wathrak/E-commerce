import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  actions: {
    login() {
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
      window.location.reload()
    },
    logout() {
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn')
    },
    clickNotification() {
      this.isNotificationActive = !this.isNotificationActive
      // console.log(this.isNotificationActive)
    },
    darkmodeToggle() {
      this.darkmode = !this.darkmode
      // console.log(this.darkmode)
    },
  },
  state: () => {
    return {
      isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
      isNotificationActive: false,
      darkmode: false,

      categories: [
        { id: 1, name: 'Canvas Wall Art' },
        { id: 2, name: 'Hand Painted Wall Art' },
        { id: 3, name: 'Shadow Boxes' },
        { id: 4, name: 'Metal Wall Art' },
      ],
      products: [
        {
          id: 1,
          name: 'Candle Stand',
          image: './src/assets/images/candle-stand.png',
          category: 'lamps',
        },
        {
          id: 2,
          name: 'Plant Pot',
          image: './src/assets/images/plant-pot.png',
          category: 'wall-decor',
        },
        {
          id: 3,
          name: 'Painting',
          image: './src/assets/images/painting.png',
          category: 'wall-decor',
        },
        {
          id: 4,
          name: 'Table',
          image: './src/assets/images/table.png',
          category: 'furnitures',
        },
      ],
      items: [
        {
          id: 1,
          imgUrl: '../src/assets/images/glasspainting1.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 100,000',
          category: 'wall-decor',
        },
        {
          id: 2,
          imgUrl: '../src/assets/images/glasspainting2.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 120,000',
          category: 'wall-decor',
        },
        {
          id: 3,
          imgUrl: '../src/assets/images/glasspainting3.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 110,000',
          category: 'wall-decor',
        },
        {
          id: 4,
          imgUrl: '../src/assets/images/glasspainting4.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 130,000',
          category: 'wall-decor',
        },
        {
          id: 5,
          imgUrl: '../src/assets/images/glasspainting5.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 140,000',
          category: 'wall-decor',
        },
        {
          id: 6,
          imgUrl: '../src/assets/images/glasspainting6.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 150,000',
          category: 'wall-decor',
        },
      ],
    }
  },
})
