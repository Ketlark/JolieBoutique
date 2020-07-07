<template>
  <q-page class="flex bg-secondary">
      <div class="container">

          <!-- Logo -->
          <div class="row">
              <div class="col-12 text-center">
                <img src="../assets/logo_white.png" alt="JolieBoutique" class="logo-big">
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
                        <label for="password">Mot de passe</label>
                        <input type="password" class="form-control" id="password" name="password" v-model="password">
                    </div>
                    <div class="form-group mt-5 text-center">
                        <button type="submit" class="btn btn-custom col-12 mb-3">Se connecter</button>
                        <router-link :to="'register'">Je n'ai pas de compte</router-link>
                    </div>
                </form>
              </div>
          </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data:function(){
    return {
      errors:[],
      email:null,
      password:null
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
      if (!this.password) {
        this.errors.push("Merci d'entrer un mot de passe valide");
        canPass = false;
      }

      if(canPass) this.sendForm();
      e.preventDefault();

    },
    async sendForm(){
      const response = await this.$axios.post(process.env.API_URL + '/users/login',{
        email:this.email,
        password:this.password,
        remember: true
      })

      if(response.status == 200) {
        await this.$router.push('/account')
      }
    }
  }
}
</script>
