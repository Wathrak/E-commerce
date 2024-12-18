import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => {
    products: []
  },
})
