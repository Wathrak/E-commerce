import { defineStore } from 'pinia'
import { useSharedStore } from './sharedstore'

export const useProductStore2 = defineStore('productStore2', {
  state: () => {
    const sharedStore = useSharedStore()

    const folderOptions = ['more1', 'more2', 'more3', 'more4']
    const folder =
      folderOptions[Math.floor(Math.random() * folderOptions.length)]

    const productData = [
      {
        title: 'Vintage Cityscape Collection',
        price: 'US $35.99',
        image: '@/assets/images/ProductImage/Wall Decor2/p1.png',
      },
      {
        title: 'Autumn Abstract Set',
        price: 'US $35.99',
        image: '@/assets/images/ProductImage/Wall Decor2/p2.png',
      },
      {
        title: 'Mystic Nature Piece',
        price: 'US $35.99',
        image: '@/assets/images/ProductImage/Wall Decor2/p3.png',
      },
      {
        title: 'Spring Portrait Edition',
        price: 'US $35.99',
        image: '@/assets/images/ProductImage/Wall Decor2/p4.png',
      },
    ]

    return {
      products: sharedStore.products,
      imgUrl: new URL(
        '@/assets/images/ProductImage/Product1/photo_2024-12-05_16-29-56.jpg',
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

      moreProducts: productData.map((product, index) => ({
        title: product.title,
        price: 'US $3.99',
        image: new URL(
          `/src/assets/images/ProductImage/${folder}/p${index + 1}.png`,
          import.meta.url,
        ).href,
      })),
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
    },
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
      alert(
        `Added ${this.quantity} item(s) of size ${this.selectedSize} to the bag!`,
      )
    },
    initializeMainImage(productId) {
      const product = this.products.find(p => p.id === productId) // Find product by id
      if (product?.image) {
        this.mainImage = product.image // Set the main image from the product
      } else {
        this.mainImage = null // Set to null if no image is found
      }
    },
    setCategory(category) {
      this.selectedCategory = category // Set selected category
    },
    getFilteredProducts() {
      if (this.selectedCategory) {
        return this.products.filter(p => p.category === this.selectedCategory)
      }
      return this.products // Return all products if no category is selected
    },
  },
})
