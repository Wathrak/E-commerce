import { defineStore } from 'pinia'
import img1 from '@/assets/images/ProductImage/photo_2024-12-05_16-29-56.jpg'
import thumb1 from '@/assets/images/ProductImage/photo_2024-12-05_16-29-56.jpg'
import thumb2 from '@/assets/images/ProductImage/il_794xN.5228816822_53pe.jpg'
import thumb3 from '@/assets/images/ProductImage/il_794xN.5228816852_lomu.jpg'
import thumb4 from '@/assets/images/ProductImage/il_794xN.5228816950_1bu0.jpg'
import thumb5 from '@/assets/images/ProductImage/il_794xN.5228817002_1s73.jpg'
import product1 from '@/assets/images/ProductImage/il_794xN.4159464681_l6fz.jpg'
import product2 from '@/assets/images/ProductImage/photo_2024-12-06_01-42-11.jpg'
import product3 from '@/assets/images/ProductImage/il_794xN.5300493903_ivjn.jpg'
import product4 from '@/assets/images/ProductImage/photo_2024-12-06_01-40-23.jpg'

export const useProductStore2 = defineStore('productStore2', {
  state: () => ({
    imgUrl: img1,
    thumbnails: [thumb1, thumb2, thumb3, thumb4, thumb5],
    product: {
      price: '$4.99',
      description: 'Printable Fall Landscape Set of 3 Split Prints, Autumn ',
    },

    mainImage: 'src/assets/images/ProductImage/photo_2024-12-05_16-29-56.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    selectedSize: 'M',
    quantity: 1,

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
      alert(
        `Added ${this.quantity} item(s) of size ${this.selectedSize} to the bag!`,
      )
    },
  },
})
