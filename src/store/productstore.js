import { defineStore } from 'pinia'
import img1 from '@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg'
import product1 from '@/assets/images/ProductImage/Product1/il_794xN.4159464681_l6fz.jpg'
import product2 from '@/assets/images/ProductImage/Product1/photo_2024-12-06_01-42-11.jpg'
import product3 from '@/assets/images/ProductImage/Product1/il_794xN.5300493903_ivjn.jpg'
import product4 from '@/assets/images/ProductImage/Product1/photo_2024-12-06_01-40-23.jpg'

export const useProductStore2 = defineStore('productStore2', {
  state: () => ({
    product: [
      {
        id: 1,
        category: 'wall-decor',
        price: '$99.99',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      {
        id: 2,
        category: 'lamp',
        price: '$45.99',
        description: 'Printable Fall Landscape Set of 3 Split Prints, Autumn',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816822_53pe.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816852_lomu.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816950_1bu0.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228817002_1s73.jpg', import.meta.url).href,
        ],
      },
      ...Array.from({ length: 14 }, (_, i) => ({
        id: i + 3, // Correct id assignment
        category: 'wall-decor',
        price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`, // Random prices
        description: `Product description for product ${i + 3}`,
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816822_53pe.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816852_lomu.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816950_1bu0.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228817002_1s73.jpg', import.meta.url).href,

        ],
      })),

      ...Array.from({ length: 14 }, (_, i) => ({
        id: i + 3, // Correct id assignment
        category: 'lamp',
        price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`, // Random prices
        description: `Product description for product ${i + 3}`,
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816822_53pe.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816852_lomu.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816950_1bu0.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228817002_1s73.jpg', import.meta.url).href,

        ],
      })),


      ...Array.from({ length: 14 }, (_, i) => ({
        id: i + 3, // Correct id assignment
        category: 'furniture',
        price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`, // Random prices
        description: `Product description for product ${i + 3}`,
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816822_53pe.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816852_lomu.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228816950_1bu0.jpg', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product1/il_794xN.5228817002_1s73.jpg', import.meta.url).href,

        ],
      })),
    ],

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
  }),

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
      const product = this.product.find(p => p.id === productId); // Find product by id
      if (product?.thumbnails?.length) {
        this.mainImage = product.thumbnails[0]; // Set the first thumbnail as the main image
      } else {
        this.mainImage = null; // Set to null if no thumbnails are found
      }
    },

    setCategory(category) {
      this.selectedCategory = category; // Set selected category
    },

    getFilteredProducts() {
      if (this.selectedCategory) {
        return this.product.filter(p => p.category === this.selectedCategory);
      }
      return this.product; // Return all products if no category is selected
    },
  },
})
