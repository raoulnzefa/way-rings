import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [
      {
            image: "prod-001.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 100,
            article: "T1",
            available: true
          },
          {
            image: "prod-002.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 150,
            article: "T2",
            available: true
          },
          {
            image: "prod-003.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 200,
            article: "T3",
            available: true
          },
          {
            image: "prod-004.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 250,
            article: "T4",
            available: true
          },
          {
            image: "prod-005.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 300,
            article: "T5",
            available: true
          },
          {
            image: "prod-006.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 350,
            article: "T6",
            available: true
          },
          {
            image: "prod-007.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 150,
            article: "T7",
            available: true
          },
          {
            image: "prod-008.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 200,
            article: "T8",
            available: true
          },
          {
            image: "prod-009.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 250,
            article: "T9",
            available: true
          },
          {
            image: "prod-010.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 300,
            article: "T10",
            available: true
          },
          {
            image: "prod-011.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 350,
            article: "T11",
            available: true
          },
          {
            image: "prod-012.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 150,
            article: "T12",
            available: true
          },
          {
            image: "prod-013.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 200,
            article: "T13",
            available: true
          },
          {
            image: "prod-014.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 250,
            article: "T14",
            available: true
          },
          {
            image: "prod-015.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 300,
            article: "T15",
            available: true
          },
          {
            image: "prod-016.jpg",
            name: "SILVER ECHMIA EAR CUFF",
            price: 350,
            article: "T16",
            available: true
          },
    ],
    cart: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isItemAddedToCart = false;
        state.cart.map(function(item){
          if (item.article === product.article) {
            isItemAddedToCart = true;
            item.quantity++
          }
        })
        if (!isItemAddedToCart) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    // GET_PRODUCTS_FROM_API({commit}) {
    //   return axios('http://localhost:3000/products', {
    //     method: "GET"
    //   })
    //     .then((products) => {
    //       commit("SET_PRODUCTS_TO_STATE", products.data);
    //       return products;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       return error;
    //     })
    // },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  modules: {
  }
})

export default store;
