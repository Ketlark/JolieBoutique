<template>
  <q-page class="flex">
    <div class="container margin-top" style="margin-bottom: 120px;">
      <div class="row justify-content-center" v-if="products.length > 0">
        <div class="col-10 mb-5 d-flex" v-for="(product, index) in products" :key="index">
            <div class="col-3 product-image" :style="{ 'background-image': 'url(' + product.image_url + ')' }"></div>
            <div class="col-6"><p>{{product.name}}<br>{{product.price}}€</p></div>
            <div class="col-3" v-on:click="removeItemFromCart(product)"><p class="delete-from-cart text-right"><i class="fas fa-trash"></i></p></div>
        </div>
      </div>
      <div class="row justify-content-center margin-top" v-if="products.length === 0">
        <div class="col-10 text-center margin-top">
          <p class="empty-cart">Votre panier est vide<br><i class="fas fa-frown mt-4"></i></p>
        </div>
      </div>
    </div>
    <button class="add-cart-button text-center"  v-if="products.length > 0"><p>Payer {{total}}€</p></button>
  </q-page>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Cart',
  data(){
    return {
      total:0
    }
  },
  computed: {
    ...mapState({
      products: state => state.cart.data
    })
  },
  methods:{
    removeItemFromCart(product){
      this.$store.dispatch('POP_DATA', product);
      this.calculateTotal();
    },
    calculateTotal(){
      let total = 0;
      this.products.forEach(element => {
        total = parseFloat(total) + parseFloat(element.price);
      });
      this.total = total.toFixed(2);
    }
  },
  beforeMount(){
    this.calculateTotal();
  }
}
</script>
