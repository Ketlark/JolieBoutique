<template>
  <q-page class="flex">

    <div class="container margin-top" style="margin-bottom: 80px;">
      <!-- Featured -->
      <div class="row justify-content-center">
        <div class="col-11 product-container">
          <div class="product-image" :style="{ 'background-image': 'url(' + product.image_url + ')' }">
          </div>
          <p class="product-name">{{product.name}}</p>
          <p class="product-price">{{product.price}}€</p>
        </div>
        <div class="col-11 mt-5">
          <p class="product-description">{{product.description}}</p>
        </div>
      </div>
    </div>
    <button class="add-cart-button text-center" v-on:click="addToCart()"><p>Ajouter au panier</p></button>

  </q-page>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'Product',
    data(){
      return{
        product:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get(process.env.API_URL + '/product/' + this.$route.params.id)
          .then(response => (this.product = response.data[0]));
      },
      addToCart(){
        this.$store.dispatch('ADD_DATA', this.product);
        this.$router.push("/cart");
      }
    },
    computed: {
      ...mapState({
        cartData: state => state.cart.data
      })
    },
  }
</script>
