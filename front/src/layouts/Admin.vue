<template>
  <q-layout>
    <!-- Page content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- If the user is logged -->
    <div>

      <!-- Menu -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="/admin">Panel Admin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active ml-3">
              <a class="nav-link" href="/admin">Accueil</a>
            </li>
            <li class="nav-item active ml-3">
              <a class="nav-link" href="/admin/users">Utilisateurs</a>
            </li>
            <li class="nav-item active ml-3">
              <a class="nav-link" href="/admin/products">Produits</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  </q-layout>

</template>

<script>

  export default {
    name: 'General',
  }
</script>
