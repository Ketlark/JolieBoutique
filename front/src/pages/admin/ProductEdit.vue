<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 d-inline-block">
          <h5 class="text-center">Edition d'un produit</h5>
          <form @submit="sendForm" novalidate="true" action="/admin/products">
            <div class="form-group">
              <label for="name">Nom</label>
              <input type="text" class="form-control" id="name" name="name" :value="productData.name">
            </div>
            <div class="form-group">
              <label for="price">Prix</label>
              <input type="text" class="form-control" id="price" name="price" :value="productData.price">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" name="description" :value="productData.description">
            </div>
            <div class="form-group">
              <label for="image_url">URL de l'image</label>
              <input type="text" class="form-control" id="image_url" name="image_url" :value="productData.image_url">
            </div>
            <button type="submit" class="btn btn-primary">Editer le produit</button>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'ProductEdit',
    data(){
      return{
        productData:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      async getData(){
        this.$axios.get(process.env.API_URL + '/product/' + this.$route.params.id)
          .then(response => (this.productData = response.data[0]));
      },
      async sendForm(e){
        e.preventDefault();
        const response = await this.$axios.post(process.env.API_URL + '/products/edit/',{
          name:document.getElementById('name').value,
          price:document.getElementById('price').value,
          description:document.getElementById('description').value,
          image_url:document.getElementById('image_url').value,
          id:this.$route.params.id,
        })
          .then(response => this.$router.push("/admin/products"))
      }
    }
  }
</script>
