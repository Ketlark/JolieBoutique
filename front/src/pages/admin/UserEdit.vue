<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 d-inline-block">
          <h5 class="text-center">Edition d'un utilisateur</h5>
          <form @submit="sendForm" novalidate="true" action="/admin/users">
            <div class="form-group">
              <label for="email">Adresse email</label>
              <input type="email" class="form-control" id="email" name="email" :value="userData.email">
            </div>
            <div class="form-group">
              <label for="surname">Nom</label>
              <input type="text" class="form-control" id="surname" name="surname" :value="userData.surname">
            </div>
            <div class="form-group">
              <label for="surname">Prénom</label>
              <input type="text" class="form-control" id="name" name="name" :value="userData.name">
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <input type="password" class="form-control" id="password" name="password" :value="userData.password">
            </div>
            <button type="submit" class="btn btn-primary">Modifier un utilisateur</button>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'UserAdd',
    data(){
      return{
        userData:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      async getData(){
          this.$axios.get(process.env.API_URL + '/user/get/' + this.$route.params.id)
            .then(response => (this.userData = response.data));
      },
      async sendForm(e){
        e.preventDefault();
        let id = this.$route.params.id;
        const response = await this.$axios.post(process.env.API_URL + '/users/edit/',{
          email:document.getElementById('email'),
          surname:document.getElementById('surname'),
          name:document.getElementById('name'),
          password:document.getElementById('password'),
          id:id,
        })
          .then(response => this.$router.push("/admin/users"))
      }
    }
  }
</script>
