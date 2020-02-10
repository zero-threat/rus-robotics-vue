import Vue from 'vue'
import Vuex from 'vuex'
import data from '../data/items.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProductsIds: [],
    products: data.items,
    filteredProducts: []
  },
  mutations: {
    addToCart(state, id) {
      state.cartProductsIds = [...state.cartProductsIds, id];
    },
    removeFromCart(state, id) {
      state.cartProductsIds.splice(state.cartProductsIds.findIndex(el => el.id === id), 1)
    },
    filterByColor(state, colors) {
      if (colors.length) {
        state.filteredProducts = state.products.filter(el => el.colors.includes(colors))
      } else {
        state.filteredProducts = []
      }
    },
    filterByCost(state, costRange) {
      state.filteredProducts = state.products.filter((el) => {
        return (+el.cost > costRange.from && +el.cost < costRange.to) && +el.cost < costRange.to;
      })
    }
  },
  getters: {
    getChosenColor(state) {
      return state.cartProductsIds.color
    },
    getCart(state) {
      return state.products.filter(el => state.cartProductsIds.includes(el.id));
    },
    getCartItemsCount(state) {
      return state.cartProductsIds.length
    },
    getFilteredProducts(state) {
      return state.filteredProducts.length ? state.filteredProducts : state.products
    }
  }
})
