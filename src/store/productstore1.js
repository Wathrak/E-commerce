import { defineStore } from 'pinia'

function generateProducts(configs) {
  return configs.flatMap(({ length, thumbnails }) =>
    Array.from({ length }, (_, index) => ({
      id: index + 1,
      category: 'wall-decor',
      price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`,
      description: `Product description for product ${index + 1}`,
      thumbnails: thumbnails.map(
        thumb => `/src/assets/images/ProductImage/Product${index + 1}/${thumb}`,
      ),
    })),
  )
}

export const useProductStore2 = defineStore('productStore2', {
  state: () => ({
    product: [
      ...generateProducts([
        {
          id: 1,
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 2,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 3,
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 4,
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 5,
          thumbnails: ['p1.png', 'p2.png'],
        },
        {
          length: 6,
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 7,
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 8,
          thumbnails: ['p1.png', 'p2.png', 'p3.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
        {
          length: 9,
          thumbnails: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png'],
        },
      ]),

      // ...Array.from({ length: 14 }, (_, i) => ({
      //   id: i + 1,
      //   category: 'wall-decor',
      //   price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`, // Random prices
      //   description: `Product description for product ${i + 8}`,
      //   thumbnails: [
      //     new URL(
      //       '@/assets/images/ProductImage/Product1/p1.png',
      //       import.meta.url,
      //     ).href,
      //     new URL(
      //       '@/assets/images/ProductImage/Product1/p2.png',
      //       import.meta.url,
      //     ).href,
      //     new URL(
      //       '@/assets/images/ProductImage/Product1/p3.png',
      //       import.meta.url,
      //     ).href,
      //     new URL(
      //       '@/assets/images/ProductImage/Product1/p4.png',
      //       import.meta.url,
      //     ).href,
      //     new URL(
      //       '@/assets/images/ProductImage/Product1/p5.png',
      //       import.meta.url,
      //     ).href,
      //   ],
      // })),

      // **** LAMPS:
      ...Array.from({ length: 14 }, () => ({
        id: 1, // Unique IDs for each product
        category: 'lamp',
        price: `$${(Math.random() * (99.99 - 20.0) + 20.0).toFixed(2)}`, // Random prices
        description: `Product description for product 2`, // Dynamic descriptions
        thumbnails: [
          new URL('@/assets/images/ProductImage/Lamp1/p1.png', import.meta.url)
            .href,
          new URL('@/assets/images/ProductImage/Lamp1/p2.png', import.meta.url)
            .href,
        ],
      })),
    ],

    imgUrl: new URL(
      '@/assets/images/ProductImage/Product1/p1.png',
      import.meta.url,
    ).href,
    mainImage: null,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    selectedSize: 'M',
    quantity: 1,
    selectedCategory: '', // To store selected category

    reviews: [
      {
        text: 'Picture is really beautiful.',
        product:
          'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
        user: 'Rimuru Tempest',
        date: 'Dec 25, 2025',
        itemQuality: 5,
        shipping: 5,
        customerService: 5,
      },
      {
        text: 'Picture is really beautiful.',
        product:
          'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
        user: 'Banana Cat',
        date: 'Dec 25, 2025',
        itemQuality: 5,
        shipping: 5,
        customerService: 5,
      },
      {
        text: 'Waku Waku!!',
        product:
          'Printable Fall Landscape Set of 3 Split Prints, Autumn Forest Set of 3 Photography',
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
        image: new URL(
          '@/assets/images/ProductImage/Product1/p1.png',
          import.meta.url,
        ).href,
      },
      {
        title: 'Fall Forest Landscape',
        price: 'US $3.99',
        image: new URL(
          '@/assets/images/ProductImage/Product1/p2.png',
          import.meta.url,
        ).href,
      },
      {
        title: 'Fall Watercolor Forest Landscape',
        price: 'US $3.99',
        image: new URL(
          '@/assets/images/ProductImage/Product1/p3.png',
          import.meta.url,
        ).href,
      },
      {
        title: 'Set of 3 Halloween Prints',
        price: 'US $3.99',
        image: new URL(
          '@/assets/images/ProductImage/Product1/p4.png',
          import.meta.url,
        ).href,
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
      alert(
        `Added ${this.quantity} item(s) of size ${this.selectedSize} to the bag!`,
      )
    },

    initializeMainImage(productId) {
      const product = this.product.find(p => p.id === productId) // Find product by id
      if (product?.thumbnails?.length) {
        this.mainImage = product.thumbnails[0] // Set the first thumbnail as the main image
      } else {
        this.mainImage = null // Set to null if no thumbnails are found
      }
    },

    setCategory(category) {
      this.selectedCategory = category // Set selected category
    },

    getFilteredProducts() {
      if (this.selectedCategory) {
        return this.product.filter(p => p.category === this.selectedCategory)
      }
      return this.product // Return all products if no category is selected
    },
  },
})
