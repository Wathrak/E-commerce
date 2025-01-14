// src/store/sharedstore.js
import { defineStore } from 'pinia'

export const useSharedStore = defineStore('sharedStore', {
  state: () => ({
    products: [
      // Wall Decor
      {
        id: 1,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductBrowse/WallDecor/horse1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 355,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      {
        id: 2,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductBrowse/WallDecor/horse1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 400,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      {
        id: 3,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL('@/assets/images/ProductBrowse/WallDecor/horse1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 30,000',
        description: 'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      // Lamps
      {
        id: 5,
        name: 'Lamp 1',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      {
        id: 6,
        name: 'Lamp 2',
        category: 'Lamps',
        image: new URL('@/assets/images/ProductBrowse/Furnitures/image1.png', import.meta.url).href,
        rating: 5,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Lamp 1 Description',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      // Furniture
      {
        id: 9,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 2,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
      {
        id: 11,
        name: 'Elegant Sofa',
        category: 'Furniture',
        image: new URL('@/assets/images/ProductBrowse/Lamps/image1.png', import.meta.url).href,
        rating: 4.8,
        shop: 'Luxury Living',
        price: 'KHR 1,500,000',
        description: 'Elegant and comfortable sofa perfect for any living room.',
        thumbnails: [
          new URL('@/assets/images/ProductImage/Product2/horse1.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse2.png', import.meta.url).href,
          new URL('@/assets/images/ProductImage/Product2/horse3.png', import.meta.url).href,
        ],
      },
    ],
  }),
})
