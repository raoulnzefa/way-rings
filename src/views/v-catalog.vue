<template>
  <div class="v-catalog">
    <v-header />
    <v-nav-menu />
    <div class="catalog-container">
      <h2 class="section-heading">Rings</h2>
      <div class="catalog-list">
        <v-catalog-item 
          v-for="product in PRODUCTS"
          :key="product.key"
          :product_data="product"
          @addToCart="addToCart"
        />
      </div>
    </div>
    <v-footer />
  </div>
</template>

<script>
import vHeader from '@/components/v-header.vue'
import vNavMenu from '@/components/v-nav-menu.vue'
import vCatalogItem from '@/components/v-catalog-item.vue'
import vFooter from '@/components/v-footer.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'vCatalog',
    components: {
        vNavMenu,
        vCatalogItem,
        vHeader,
        vFooter
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        // 'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data);
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ])
    },
    mounted() {
      // this.GET_PRODUCTS_FROM_API()
      //   .then((response) => {
      //     if (response.data) {
      //       console.log('Data arrived')
      //     }
      //   })
    }
}
</script>

<style>
.v-catalog {
    position: relative;
}
.catalog-container {
  width: 90%;
  max-width: 880px;
  margin: 0 auto;
}
.catalog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.top-right-link {
  position: fixed;
  top: 1rem;
  right: 1rem;
  box-shadow: 0 3px 8px #777;
  padding: 0 3rem;
  font-size: 1.2rem;
  z-index: 3
}
</style>