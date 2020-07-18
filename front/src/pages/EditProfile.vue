<template>
  <q-page class="flex">
    <div class="container margin-top" style="margin-bottom: 120px;">

      <div class="row">
        <div class="col-10">
          <p v-if="errors !== undefined && errors.length" class="errors">
            <b>Merci de corriger les erreurs suivantes :</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-10">
          <form @submit="sendForm" action="/todo" novalidate="true">
            <div class="form-group">
              <label for="email">Adresse e-mail</label>
              <input type="email" class="form-control" id="email" name="email" :value="accountData.email">
            </div>
            <div class="form-group">
              <label for="lastname">Nom</label>
              <input type="text" class="form-control" id="lastname" name="lastname" :value="accountData.surname">
            </div>
            <div class="form-group">
              <label for="firstname">Prénom</label>
              <input type="text" class="form-control" id="firstname" name="firstname" :value="accountData.name">
            </div>
            <div class="form-group">
              <label for="password">Mot de passe (laisser vide si inchangé)</label>
              <input type="password" class="form-control" id="password" name="password">
            </div>
            <div class="form-group mt-5 text-center">
              <button type="submit" class="btn btn-edit-profile col-12 mb-3">Mettre à jour mes informations</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'EditProfile',
    data: function(){
      return {
        errors: [],
        accountData:[],
      }
    },
    methods:{
      sendForm(e){
        let email = document.getElementById('email').value;
        let surname = document.getElementById('lastname').value;
        let name = document.getElementById('firstname').value;

        if(document.getElementById('password').value != "") {
          let password = document.getElementById('password').value;
        }else {
          let password = "";
        }

        e.preventDefault();
        this.$axios.post(process.env.API_URL + '/users/edit',{
          email:email,
          surname:surname,
          name:name,
          password:password,
          id:this.accountData.id

        })
          .then(response => this.$router.push("/account"))
          .catch(error => {
            this.errors = [];
            this.errors.push("Erreur lors de la mise à jour.")
          })
      },
      async getData(){
        const response = await this.$axios.get(process.env.API_URL + '/users/me')

        if(response.status == 200) {
          this.accountData = response.data;
          this.isLogged = true
        } else {
          await this.$router.push('/account')
        }
      }
    },
    beforeMount() {
      this.getData();
    }
  }
</script>
