<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12">
          <h5 class="text-center">Bienvenue sur le panel administrateur de JolieBoutique.</h5>
        </div>
      </div>
      <div class="row justify-content-center margin-top">
        <div class="col-12">
          <p class="text-center">Quelques statistiques :</p>
        </div>
        <div class="col-4"><p class="text-center">{{this.numberCategories}} catégorie(s)</p></div>
        <div class="col-4"><p class="text-center">{{this.numberUsers}} utilisateur(s)</p></div>
        <div class="col-4"><p class="text-center">{{this.numberProducts}} produit(s)</p></div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        numberCategories:0,
        numberUsers:0,
        numberProducts:0,
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get(process.env.API_URL + '/categories')
          .then(response => (this.numberCategories = response.data.length));
        this.$axios.get(process.env.API_URL + '/products')
          .then(response => (this.numberProducts = response.data.length));
        this.$axios.get(process.env.API_URL + '/users')
          .then(response => (this.numberUsers = response.data.length));
      }
    }
  }
</script>
