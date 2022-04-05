<template>
  <div class="v-nav-menu">
      <div class="container">
          <ul class="navigation">
            <router-link :to="{name: 'homepage'}">
                <li class="navigation-item">HOME</li>
            </router-link>
            <router-link :to="{name: 'catalog'}">
                <li class="navigation-item">CATALOG</li>
            </router-link>
            <router-link :to="{name: 'cart', params: {cart_data: CART}}">
                <li class="navigation-item">
                    CART
                    <div class="cart-items-quantity" v-if="CART.length">
                        {{CART.length}}
                    </div>
                </li>
            </router-link>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'vNavMenu',
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
}
</script>

<style>
.v-nav-menu {
    position: fixed;
    z-index: 3;
    top: 10rem;
    left: 4.5rem;
    padding: 0.5rem;
    background-color: transparent;
    backdrop-filter: blur(6px)
}
.navigation-item {
    position: relative;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    text-transform: uppercase;
    color: #7a8184;
    transition: .2s;
}
.navigation-item:hover {
    color: #60676B;
}
.navigation-item .cart-items-quantity {
  top: 0;
  right: 0rem;
}
</style>