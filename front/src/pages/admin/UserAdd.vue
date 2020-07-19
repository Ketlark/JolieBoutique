<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center">
        <div class="col-md-8 col-12 d-inline-block">
          <h5 class="text-center">Ajout d'un utilisateur</h5>
          <form @submit="sendForm" novalidate="true" action="/admin/users">
            <div class="form-group">
              <label for="email">Adresse email</label>
              <input type="email" class="form-control" id="email" name="email">
            </div>
            <div class="form-group">
              <label for="surname">Nom</label>
              <input type="text" class="form-control" id="surname" name="surname">
            </div>
            <div class="form-group">
              <label for="surname">Prénom</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <input type="password" class="form-control" id="password" name="password">
            </div>
            <div class="form-group">
              <label for="password_confirmation">Confirmation du mot de passe</label>
              <input type="password" class="form-control" id="password_confirmation" name="password_confirmation">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter un utilisateur</button>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'UserAdd',
    methods:{
      async sendForm(e){
        e.preventDefault();
        const response = await this.$axios.post(process.env.API_URL + '/users/register',{
          email:document.getElementById('email').value,
          surname:document.getElementById('surname').value,
          name:document.getElementById('name').value,
          password:document.getElementById('password').value,
          password_confirmation:document.getElementById('password_confirmation').value,
        })

        if(response.status == 200) {
          await this.$router.push('/admin/users')
        }
      }
    }
  }
</script>
