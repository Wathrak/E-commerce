import { defineStore } from 'pinia'
import { useSharedStore } from './sharedstore'

export const useBrowseStore = defineStore('browseStore', {
  getters: {
    walldecors: (state) => {
      const sharedStore = useSharedStore()
      return sharedStore.products.filter(product => product.category === 'Wall Decor')
    },
    lamps: (state) => {
      const sharedStore = useSharedStore()
      return sharedStore.products.filter(product => product.category === 'Lamps')
    },
    furnitures: (state) => {
      const sharedStore = useSharedStore()
      return sharedStore.products.filter(product => product.category === 'Furniture')
    }
  }
})
