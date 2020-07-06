<template>
  <q-page class="flex bg-secondary">
      <div class="container" style="margin-bottom: 120px;">

          <!-- Logo -->
          <div class="row">
              <div class="col-12 text-center">
                <img src="../assets/logo_white.png" alt="JolieBoutique" class="logo-big">
              </div>
          </div>

          <div class="row mt-5">
            <div class="col-10">
              <p v-if="errors !== undefined && errors.length" class="errors">
                <b>Merci de corriger les erreurs suivantes :</b>
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
            </div>
          </div>

          <!-- Login Form -->
          <div class="row justify-content-center mt-5">
              <div class="col-10">
                  <form class="bg-secondary-form" @submit="checkForm" action="/todo" novalidate="true">
                    <div class="form-group">
                        <label for="email">Adresse e-mail</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Nom</label>
                        <input type="lastname" class="form-control" id="lastname" name="lastname" v-model="lastname">
                    </div>
                    <div class="form-group">
                        <label for="firstname">Prénom</label>
                        <input type="firstname" class="form-control" id="firstname" name="firstname" v-model="firstname">
                    </div>
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password" v-model="password">
                        <small>6 caractères minimum.</small>
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirmation du mot de passe</label>
                        <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" v-model="password_confirmation">
                    </div>
                    <div class="form-group mt-5 text-center">
                        <button type="submit" class="btn btn-custom col-12 mb-3">S'inscrire</button>
                        <router-link :to="'login'">J'ai déjà un compte</router-link>
                    </div>
                </form>
              </div>
          </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data: function(){
    return {
      errors: [],
      email:null,
      lastname:null,
      firstname:null,
      password:null,
      password_confirmation:null
    }
  },
  methods:{
    checkForm: function (e) {
      this.errors = []; // Reseting the errors array
      var canPass = true; // Will be used to determine if we can send the form or not

      if (!this.email) {
        this.errors.push("Merci d'entrer un e-mail valide.");
        canPass = false;
      }
      if (!this.lastname) {
        this.errors.push("Merci d'entrer un nom valide.");
        canPass = false;
      }
      if (!this.firstname) {
        this.errors.push("Merci d'entrer un prénom valide.");
        canPass = false;
      }
      if (!this.password || this.password.length < 6 || !this.password_confirmation) {
        this.errors.push("Merci d'entrer un mot de passe valide");
        canPass = false;
      }
      if (this.password != this.password_confirmation) {
        this.errors.push("La confirmation du mot de passe n'est pas valide");
        canPass = false;
      }

      if(canPass) this.sendForm();
      e.preventDefault();

    },
    sendForm(){
      this.$axios.post(process.env.API_URL + '/users/register',{
        email:this.email,
        password:this.password,
        password_confirmation:this.password_confirmation,
        surname:this.firstname,
        name:this.lastname,

      })
        .then(response => this.$router.push("/account"))
        .catch(error => {
          this.errors = [];
          this.errors.push("Identifiants invalides.")
        })
    }
  }
}
</script>
