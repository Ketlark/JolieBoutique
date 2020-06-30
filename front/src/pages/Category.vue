<template>
  <q-page class="flex">

    <div class="container margin-top" style="margin-bottom: 80px;">

      <div class="row justify-content-center">
        <div class="col-11 text-left">
          <p class="subtitle">{{name}}</p>
        </div>
      </div>

      <div class="row justify-content-center">
        <router-link :to="{ name: 'product-detail', params: { id: product.id }}" class="mb-5 product-container col-10" v-for="(product, index) in products">
          <div class="product-image" :style="{ 'background-image': 'url(' + product.image_url + ')' }">
          </div>
          <p class="product-name">{{product.name}}</p>
          <p class="product-price">{{product.price}}€</p>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Category',
    data(){
      return{
        products:[],
        name:""
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      getData(){
        this.name = this.$route.params.category;
        this.$axios.get(process.env.API_URL + '/categories/' + this.$route.params.id)
          .then(response => (this.products = response.data));
      }
    }
  }
</script>
