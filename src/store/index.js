import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/items.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProductsIds: [],
    products: data.items
  },
  mutations: {
    addToCart: (state, id) => {
      state.cartProductsIds = [...state.cartProductsIds, id];
    }
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getCart: (state) => {
      return state.products.filter(el => state.cartProductsIds.includes(el.id));
    },
    // getProductsByFilter(state, filter) {
    //   return state.products.filter(filter)
    // },
    // getColorsFilter(state) {
    //   const colors = [...(new Set(state.products.map(el => el.colors).flat()))]
    //   return colors.map(color => ({
    //     value: color,
    //     filter: (product) => product.color === color
    //   }))
    // }
  }
})
