<template>
  <q-page class="flex">

    <div class="container" style="margin-bottom: 80px;">
    <!-- Categories -->
      <!-- Title -->
      <div class="row justify-content-center">
        <div class="col-11 text-left">
          <p class="subtitle margin-top">Catégories</p>
        </div>
      </div>
      <!-- Icons -->
      <div class="row justify-content-center category-container">
        <div class="col-11 d-flex">
          <router-link :to="{ name: 'category', params: { id: category.id, category: category.name }}" class="category-link" v-for="category in categories">
            <div class="category-icon text-center">
              <i :class="category.icon"></i>
            </div>
            <p class="text-center category-name">{{category.name}}</p>
          </router-link>
        </div>
      </div>

    <!-- Featured -->
      <div class="row justify-content-center">
        <div class="col-11 text-left">
          <p class="subtitle" style="margin-top:20px;">À la une</p>
        </div>
        <router-link :to="{ name: 'product-detail', params: { id: product.id }}" class="mb-5 product-container" v-for="(product, index) in products" :class="{'col-10' : index == 0, 'col-5' : index != 0}">
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
  name: 'Home',
  data(){
    return{
      categories:[],
      products:[]
    }
  },
  beforeMount() {
    this.getData();
  },
  methods:{
    getData(){
      this.$axios.get(process.env.API_URL + '/categories')
        .then(response => (this.categories = response.data))

      this.$axios.get(process.env.API_URL + '/product')
        .then(response => (this.products = response.data))
    }
  }
}
</script>
