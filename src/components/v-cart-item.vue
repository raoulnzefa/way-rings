  <template>    
    <div class="v-cart-item">
      <img :src=" require('../assets/img/products/' + cart_item_data.image) " alt="" class="cart-item-img">
      <h3 class="catalog-item-name">{{cart_item_data.name}}</h3>
      <p class="cart-item-price">Price: ${{cart_item_data.price}}</p>
      <div class="cart-item-quantity">
        Qty:<br> 
        <p class="d-flex center flex-center">
          <span class="qty-change" @click="decrementItem">-</span>
          <span class="qty-number">{{cart_item_data.quantity}}</span>  
          <span class="qty-change" @click="incrementItem">+</span>
        </p>
      </div>
      <button 
        class="btn" 
        @click="deleteFromCart"
      >Delete</button>
    </div>
  </template>

  <script>

  export default {
      name: 'vCartitem',
      props: {
        cart_item_data: {
          type: Object,
          default() {
            return {}
          }
        }
      },
      methods: {
        decrementItem() {
          this.$emit('decrement');
        },
        incrementItem() {
          this.$emit('increment');
        },
        deleteFromCart() {
          this.$emit('deleteFromCart')
        }
      },
      mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
      }
  }
  </script>

  <style>
  .v-cart-item {
    border-top: 1px solid #ccc;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
  .cart-item-img {
    width: 10rem;
    height: auto;
  }
  .qty-change {
    cursor: pointer;
  }
  .qty-number {
    display: inline-block;
    margin: 0 1rem;
  }
  </style>