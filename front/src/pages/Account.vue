<template>
  <q-page class="flex">
    <div class="container margin-top">
      <div class="row justify-content-center" style="margin-bottom:200px; margin-top:80px;">
        <div class="col-10 text-center">
          <p><b>Prénom nom</b><br>adresse@email.com</p>
        </div>
      </div>
      <div class="row justify-content-center" style="margin-top:10px;">
        <button class="edit-profile-button text-center col-10 mb-3" v-on:click="addToCart()"><p>Modifier mon profil</p></button>
        <button class="show-parcels-button text-center col-10"><p>Mes commandes</p></button>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Account'
}
</script>
