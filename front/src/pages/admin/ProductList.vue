<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row">
        <div class="col-12 d-inline-block">
          <p class="d-flex text-left">Liste des produits</p>
          <router-link :to="'/admin/products/add'" class="float-right btn btn-primary" style="position: relative;top:-40px;">Ajouter un produit</router-link>
        </div>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prix</th>
            <th width="5%"></th>
            <th width="5%"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <th scope="row">{{product.id}}</th>
            <td>{{product.name}}</td>
            <td>{{product.price}}€</td>
            <td class="text-center"><router-link :to="{ name: 'product-edit', params: { id: product.id }}"><i class="fas fa-edit" style="color:black;"></i></router-link></td>
            <td class="text-center"><i class="fas fa-trash" v-on:click="deleteItem(product.id)"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'ProductList',
    data() {
      return {
        products:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get(process.env.API_URL + '/products')
          .then(response => (this.products = response.data));
      },
      deleteItem(id){
        this.$axios.get(process.env.API_URL + '/product/remove/' + id)
          .then(() => this.getData());
      }
    }
  }
</script>
