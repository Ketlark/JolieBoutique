<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row">
        <div class="col-12 d-inline-block">
          <p class="d-flex text-left">Liste des utilisateurs</p>
          <router-link :to="'/admin/users/add'" class="float-right btn btn-primary" style="position: relative;top:-40px;">Ajouter un utilisateur</router-link>
        </div>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th width="5%"></th>
            <th width="5%"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <th scope="row">{{user.id}}</th>
            <td>{{user.surname}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td class="text-center"><router-link :to="{ name: 'user-edit', params: { id: user.id }}"><i class="fas fa-edit"></i></router-link></td>
            <td class="text-center"><i class="fas fa-trash" v-on:click="deleteItem(user.id)"></i></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'UserList',
    data() {
      return {
        users:[]
      }
    },
    beforeMount() {
      this.getData();
    },
    methods:{
      getData(){
        this.$axios.get(process.env.API_URL + '/users')
          .then(response => (this.users = response.data));
      },
      deleteItem(id){
        this.$axios.get(process.env.API_URL + '/users/remove/' + id)
          .then(() => this.getData());
      }
    }
  }
</script>
