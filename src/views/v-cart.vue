<template>
  <div class="v-cart">
    <v-header />
    <v-nav-menu />
      <div class="catalog-container">
        <h2 class="section-heading">Chosen Rings</h2>
        <p v-if="!cart_data.length">
          The cart is empty ...
        </p>
        <div class="cart-items-list">
          <v-cart-item 
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
          />
        </div>
      </div>
      <div class="cart-total">
        Total: {{cartTotalCost}} $
        <button class="btn">Order</button>
      </div>
    <v-footer />
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vNavMenu from '@/components/v-nav-menu.vue'
import vFooter from '@/components/v-footer.vue'
import { mapActions, mapGetters } from 'vuex'
import vCartItem from '@/components/v-cart-item.vue';

export default {
    name: 'vCart',
    components: {
      vHeader,
      vNavMenu,
      vCartItem,
      vFooter
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM',
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index);
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index);
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      cartTotalCost() {
        let result = [];
        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }
          result = result.reduce(function(sum, el) {
            return sum + el
          })
          return result;
        } else {
          return 0
        }
      }
    }
}
</script>

<style>
.cart-total {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  background-color: #60676B;
  color: #f0f0f0;
  padding: .5rem 1rem;
}
.cart-total .btn {
  margin-left: 1rem;
}
</style>