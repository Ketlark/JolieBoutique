<template>
  <q-page class="flex">
    <div class="container margin-top" v-if="isLogged">
      <div class="row justify-content-center" style="margin-bottom:200px; margin-top:80px;">
        <div class="col-10 text-center">
          <p><b>{{accountData.surname}} {{accountData.name}}</b><br>{{accountData.email}}</p>
        </div>
      </div>
      <div class="row justify-content-center" style="margin-top:10px;">
        <router-link :to="'editprofile'" class="edit-profile-button text-center col-10 mb-3"><p>Modifier mon profil</p></router-link>
        <!--<button class="show-parcels-button text-center col-10"><p>Mes commandes</p></button>-->
      </div>
    </div>
    <div v-else class="margin-top container">
      <div class="row justify-content-center margin-top">
        <p class="text-center mb-5">Veuillez-vous connecter pour accéder<br>à votre profil.</p>
        <router-link :to="'login'" class="show-parcels-button text-center col-10"><p>Me connecter</p></router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Account',
  data(){
    return {
      accountData:[],
      isLogged:false
    }
  },
  beforeMount() {
    this.getData();
  },
  methods:{
    async getData(){
      const response = await this.$axios.get(process.env.API_URL + '/users/me')

      if(response.status == 200) {
        this.accountData = response.data;
        this.isLogged = true
      } else {
        await this.$router.push('/account')
      }
    }
  }
}
</script>
