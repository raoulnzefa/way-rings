<template>
  <div class="v-catalog-item">
    <img :src=" require('../assets/img/products/' + product_data.image) " alt="" class="catalog-item-img">
    <div class="catalog-item-info">
      <h3 class="catalog-item-name">{{product_data.name}}</h3>
      <p class="catalog-item-price">Price: ${{product_data.price}}</p>
      <button 
        class="btn" 
        @click="addToCart"
      >Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vCatalogItem',
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data)
      }
    }
}
</script>

<style>
.v-catalog-item {
  margin-bottom: 1rem;
  width: 24%;
  max-width: 210px;
}
.catalog-item-img {
  width: 100%;
  height: auto;
  background-color: #ccc;
}
.catalog-item-info {
  padding: 1rem;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #60676B;
}
.catalog-item-name {
  font-weight: 300;
}
@media (max-width: 768px) {
  .v-catalog-item {
    width: 48%;
  }
}
@media (max-width: 480px) {
  .v-catalog-item {
    width: 100%;
  }
}
</style>