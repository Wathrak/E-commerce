// src/store/productstore.js

import { defineStore } from 'pinia'
import { useSharedStore } from './sharedstore'
import img1 from '@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg'
import product1 from '@/assets/images/ProductImage/Product1/il_794xN.4159464681_l6fz.jpg'
import product2 from '@/assets/images/ProductImage/Product1/photo_2024-12-06_01-42-11.jpg'
import product3 from '@/assets/images/ProductImage/Product1/il_794xN.5300493903_ivjn.jpg'
import product4 from '@/assets/images/ProductImage/Product1/photo_2024-12-06_01-40-23.jpg'

export const useProductStore2 = defineStore('productStore2', {
  state: () => {
    const sharedStore = useSharedStore()
    return {
      products: sharedStore.products,
      imgUrl: img1,
      mainImage: null,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      selectedSize: 'M',
      quantity: 1,
      selectedCategory: '', // To store selected category
      reviews: [
        {
          text: 'Picture is really beautiful.',
          product: 'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
          user: 'Rimuru Tempest',
          date: 'Dec 25, 2025',
          itemQuality: 5,
          shipping: 5,
          customerService: 5,
        },
        {
          text: 'Picture is really beautiful.',
          product: 'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
          user: 'Banana Cat',
          date: 'Dec 25, 2025',
          itemQuality: 5,
          shipping: 5,
          customerService: 5,
        },
        {
          text: 'Waku Waku!!',
          product: 'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
          user: 'Anya Forger',
          date: 'Dec 25, 2025',
          itemQuality: 5,
          shipping: 5,
          customerService: 5,
        },
      ],
      moreProducts: [
        {
          title: 'Autumn Landscape Set of 3 Prints',
          price: 'US $3.99',
          image: product1,
        },
        {
          title: 'Fall Forest Landscape',
          price: 'US $3.99',
          image: product2,
        },
        {
          title: 'Fall Watercolor Forest Landscape',
          price: 'US $3.99',
          image: product3,
        },
        {
          title: 'Set of 3 Halloween Prints',
          price: 'US $3.99',
          image: product4,
        },
      ],
    }
  },
  getters: {
    walldecors(state) {
      return state.products.filter(product => product.category === 'Wall Decor')
    },
    lamps(state) {
      return state.products.filter(product => product.category === 'Lamps')
    },
    furniture(state) {
      return state.products.filter(product => product.category === 'Furniture')
    }
  },
  actions: {
    setMainImage(image) {
      this.mainImage = image
    },
    increaseQuantity() {
      this.quantity++
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--
    },
    selectSize(size) {
      this.selectedSize = size
    },
    addToBag() {
      alert(`Added ${this.quantity} item(s) of size ${this.selectedSize} to the bag!`)
    },
    initializeMainImage(productId) {
      const product = this.products.find(p => p.id === productId); // Find product by id
      if (product?.image) {
        this.mainImage = product.image; // Set the main image from the product
      } else {
        this.mainImage = null; // Set to null if no image is found
      }
    },
    setCategory(category) {
      this.selectedCategory = category; // Set selected category
    },
    getFilteredProducts() {
      if (this.selectedCategory) {
        return this.products.filter(p => p.category === this.selectedCategory);
      }
      return this.products; // Return all products if no category is selected
    },
  },
})
