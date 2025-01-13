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
      ...Array.from({ length: 14 }, (_, i) => ({
        id: i + 3,
        name: `Wall Decor ${i + 3}`,
        category: 'Wall Decor',
        image: new URL(
          `/src/assets/images/ProductBrowse/WallDecor/p${i + 3}.png`,
          import.meta.url,
        ).href,
        rating: 5.0,
        shop: 'Besdong Khmer',
        price: `KHR ${(120000 + i * 10000).toLocaleString()}`,
        description: `Description for Wall Decor ${i + 3}`,
      })),
    ],
    lamps: [
      ...Array.from({ length: 4 }, (_, i) => ({
        id: i + 1,
        name: `Lamp ${i + 1}`,
        category: 'Lamps',
        image: new URL(
          `/src/assets/images/ProductBrowse/Lamps/p${i + 1}.png`,
          import.meta.url,
        ).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: `KHR ${(120000 + i * 10000).toLocaleString()}`,
        description: `Description for Lamp ${i + 1}`,
      })),
    ],
    furnitures: [
      ...Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        name: `Furniture ${i + 1}`,
        category: 'Furnitures',
        image: new URL(
          `/src/assets/images/ProductBrowse/Furnitures/p${i + 1}.png`,
          import.meta.url,
        ).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: `KHR ${(120000 + i * 10000).toLocaleString()}`,
        description: `Description for Furnitures ${i + 1}`,
      })),

      ...Array.from({ length: 2 }, (_, i) => ({
        id: i + 7,
        name: `Furniture ${i + 7}`,
        category: 'Furnitures',
        image: new URL(
          `/src/assets/images/ProductBrowse/Furnitures/image1.png`,
          import.meta.url,
        ).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: `KHR ${(120000 + i * 10000).toLocaleString()}`,
        description: `Description for Furnitures ${i + 7}`,
      })),
    ],
  }),
})
