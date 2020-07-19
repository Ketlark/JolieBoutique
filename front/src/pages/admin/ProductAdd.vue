<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 d-inline-block">
          <h5 class="text-center">Ajout d'un produit</h5>
          <form @submit="sendForm" novalidate="true" action="/admin/products">
            <div class="form-group">
              <label for="name">Nom</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="form-group">
              <label for="price">Prix</label>
              <input type="text" class="form-control" id="price" name="price">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" class="form-control" id="description" name="description">
            </div>
            <div class="form-group">
              <label for="image_url">URL de l'image</label>
              <input type="text" class="form-control" id="image_url" name="image_url">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter un produit</button>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'UserAdd',
    data() {
      return {
        categories:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      async getData(){
      },
      async sendForm(e){
        e.preventDefault();
        const response = await this.$axios.post(process.env.API_URL + '/products/add',{
          name:document.getElementById('name'),
          category_id:0,
          price:document.getElementById('price'),
          description:document.getElementById('description'),
          image_url:document.getElementById('image_url'),
          is_on_top:false,
        })

        if(response.status == 200) {
          await this.$router.push('/admin/products')
        }
      }
    }
  }
</script>
