<template>
  <q-layout view="lHh Lpr lFf" >
      <!-- Page content -->
      <q-page-container>
        <router-view />
      </q-page-container>

    <!-- If the user is logged -->
    <div>

      <!-- Header -->
      <div class="header-container text-center">
        <p>JolieBoutique</p>
      </div>

      <!-- Menu -->
      <div class="menu-container">
        <router-link @click.native="changeTab(link.link)" :to="link.link" class="menu-item" v-for="link in essentialLinks" :class="{'menu-item-active': checkCurrentTab(link.link)}">
          <i :class="link.icon"></i>
          <p>{{link.title}}<span>•</span></p>
        </router-link>
      </div>
    </div>

    </q-layout>

</template>

<script>

export default {
  name: 'General',
  data () {
    return {
      currentTab: "",
      essentialLinks: [
        {
          title: 'Accueil',
          icon: 'fas fa-home',
          link: '/'
        },
        {
          title: 'Mon panier',
          icon: 'fas fa-shopping-cart',
          link: '/cart'
        },
        {
          title: 'Mon compte',
          icon: 'fas fa-user',
          link: '/account'
        }
      ]
    }
  },
  methods:{
    checkCurrentTab(currentItemName){
        if(this.currentTab == currentItemName) return true;
        return false;
    },
    changeMenu(){
      this.currentTab = this.$router.currentRoute.path;
    },
    changeTab(newTab){
      this.currentTab = newTab;
    }
  },
  beforeMount(){
    this.changeMenu();
  }
}
</script>
