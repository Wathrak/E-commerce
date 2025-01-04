import Furniture from '@/components/Product_Category/Furniture.vue'
import { defineStore } from 'pinia'

export const useBrowseStore = defineStore('browseStore', {
  state: () => ({
    walldecors: [
      {
        id: 1,
        name: 'Horses in Paradise',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/horse1.png',
          import.meta.url,
        ).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: 'KHR 355,000',
        description:
          'Horses in Paradise Hand Painted Wall Painting (With Outer Floater Frame)',
      },
      {
        id: 2,
        name: 'Wall Decor 2',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'Wall1',
      },
      {
        id: 3,
        name: 'Wall Decor 3',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'Wall1',
      },
      {
        id: 4,
        name: 'Wall Decor 4',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'Wall1',
      },
      {
        id: 5,
        name: 'Wall Decor 5',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'Wall1',
      },
      {
        id: 6,
        name: 'Wall Decor 6',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 140,000',
        description: 'Wall1',
      },
      {
        id: 7,
        name: 'Wall Decor 7',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 150,000',
        description: 'Wall1',
      },
      {
        id: 8,
        name: 'Wall Decor 8',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 160,000',
        description: 'Wall1',
      },
      {
        id: 9,
        name: 'Wall Decor 9',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 170,000',
        description: 'Wall1',
      },
      {
        id: 10,
        name: 'Wall Decor 10',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 180,000',
        description: 'Wall1',
      },
      {
        id: 11,
        name: 'Wall Decor 11',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 190,000',
        description: 'Wall1',
      },
      {
        id: 12,
        name: 'Wall Decor 12',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 200,000',
        description: 'Wall1',
      },
      {
        id: 13,
        name: 'Wall Decor 13',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 210,000',
        description: 'Wall1',
      },
      {
        id: 14,
        name: 'Wall Decor 14',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 220,000',
        description: 'Wall1',
      },
      {
        id: 15,
        name: 'Wall Decor 15',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 230,000',
        description: 'Wall1',
      },
      {
        id: 16,
        name: 'Wall Decor 16',
        category: 'Wall Decor',
        image: new URL(
          '@/assets/images/ProductBrowse/WallDecor/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 230,000',
        description: 'Wall1',
      },
    ],
    lamps: [
      {
        id: 1,
        name: 'Lamp 1',
        category: 'Lamps',
        image: new URL(
          '@/assets/images/ProductBrowse/Lamps/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'lamp1',
      },
      {
        id: 2,
        name: 'Lamp 2',
        category: 'Lamps',
        image: new URL(
          '@/assets/images/ProductBrowse/Lamps/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'lamp1',
      },
      {
        id: 3,
        name: 'Lamp 3',
        category: 'Lamps',
        image: new URL(
          '@/assets/images/ProductBrowse/Lamps/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'lamp1',
      },
      {
        id: 4,
        name: 'Lamp 4',
        category: 'Lamps',
        image: new URL(
          '@/assets/images/ProductBrowse/Lamps/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'lamp1',
      },
    ],
    furnitures: [
      {
        id: 1,
        name: 'Furniture 1',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 100,000',
        description: 'furniture1',
      },
      {
        id: 2,
        name: 'Furniture 2',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'furniture1',
      },
      {
        id: 3,
        name: 'Furniture 3',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'furniture1',
      },
      {
        id: 4,
        name: 'Furniture 5',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image1.png',
          import.meta.url,
        ).href,
        rating: 4.0,
        shop: 'Besdong Khmer',
        price: 'KHR 120,000',
        description: 'furniture1',
      },
      {
        id: 5,
        name: 'Furniture 6',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image2.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 130,000',
        description: 'furniture1',
      },
      {
        id: 6,
        name: 'Furniture 7',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image3.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 140,000',
        description: 'furniture1',
      },
      {
        id: 7,
        name: 'Furniture 8',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image4.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 150,000',
        description: 'lamp1',
      },
      {
        id: 8,
        name: 'Furniture 9',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image5.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 160,000',
        description: 'furniture1',
      },
      {
        id: 9,
        name: 'Furniture 10',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image6.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 170,000',
        description: 'furniture1',
      },
      {
        id: 10,
        name: 'Furniture 11',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image7.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 180,000',
        description: 'furniture1',
      },
      {
        id: 11,
        name: 'Furniture 12',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image8.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 190,000',
        description: 'furniture1',
      },
      {
        id: 12,
        name: 'Furniture 13',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image9.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 200,000',
        description: 'furniture1',
      },
      {
        id: 13,
        name: 'Furniture 14',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image10.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 210,000',
        description: 'furniture1',
      },
      {
        id: 14,
        name: 'Furniture 15',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image11.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 220,000',
        description: 'furniture1',
      },
      {
        id: 15,
        name: 'Furniture 16',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image12.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 230,000',
        description: 'furniture1',
      },
      {
        id: 16,
        name: 'Furniture 17',
        category: 'Furnitures',
        image: new URL(
          '@/assets/images/ProductBrowse/Furnitures/image13.png',
          import.meta.url,
        ).href,
        shop: 'Besdong Khmer',
        price: 'KHR 240,000',
        description: 'furniture1',
      },
    ],
  }),
})
