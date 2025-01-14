// src/store/sharedstore.js
import { defineStore } from 'pinia'

function generateProducts(configs) {
  const categoryIndices = {} // To keep track of IDs per category

  return configs.flatMap(({ length, thumbnails, category, name }) => {
    if (!categoryIndices[category]) {
      categoryIndices[category] = 1 // Initialize index for this category
    }

    return Array.from({ length }, () => {
      const currentIndex = categoryIndices[category] // Use category-specific index
      const product = {
        id: currentIndex,
        name: name || `Product ${currentIndex}`,
        category: category,
        image: new URL(
          `/src/assets/images/ProductBrowse/${category}/p${currentIndex}.png`,
          import.meta.url,
        ).href,
        rating: 4.5,
        shop: 'Besdong Khmer',
        price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`,
        description: `Product description for product ${currentIndex} in category ${category}`,
        thumbnails: thumbnails.map(
          thumb =>
            `/src/assets/images/ProductImage/${category}${currentIndex}/${thumb}`,
        ),
      }
      categoryIndices[category]++ // Increment category-specific index
      return product
    })
  })
}

export const useSharedStore = defineStore('sharedStore', {
  state: () => ({
    products: [
      ...generateProducts([
        // Wall Decor
        {
          length: 1,
          name: 'Horses in Paradise',
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png'],
        },
        {
          length: 1,
          category: 'Wall Decor',
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png'],
        },

        // Lamps
        {
          length: 1,
          category: 'Lamps',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Lamps',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Lamps',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Lamps',
          thumbnails: ['p1.png', 'p2.png'],
        },

        // Furniture
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 1,
          category: 'Furniture',
          thumbnails: ['p1.png', 'p2.png'],
        },
      ]),
    ],
  }),
})
