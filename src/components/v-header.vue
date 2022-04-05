<template>
  <header class="header">
      <div class="container d-flex center space-between">
        <router-link :to="{name: 'homepage'}">
          <img src="../assets/img/svg/logo.svg" alt="logo" class="logo-img">
        </router-link>
        <div class="header-nav d-flex center">
          <router-link :to="{name: 'catalog'}">
            <li class="header-nav-item">
              <img src="../assets/img/svg/heart.svg" alt="heart">
            </li>
          </router-link>
          <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <li class="header-nav-item">
              <img src="../assets/img/svg/user.svg" alt="user">
            </li>
          </router-link>
          <router-link :to="{name: 'cart', params: {cart_data: CART}}" class="header-nav-item">
              <img src="../assets/img/svg/cart.svg" alt="cart">
              <div class="cart-items-quantity" v-if="CART.length">
                {{CART.length}}
              </div>
          </router-link>
        </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'v-header',
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
}
</script>

<style>
.header {
    padding: 1.5rem 0;
    background-color: transparent;
}
.header-nav-item {
  margin-left: 1rem;
  position: relative;
}
.cart-items-quantity {
  position: absolute;
  display: grid;
  place-items: center center;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 100px;
  background-color: #999;
  font-weight: 700;
  font-size: .7rem;
  top: .6rem;
  right: -.6rem;
  color: #eee;
}
</style>