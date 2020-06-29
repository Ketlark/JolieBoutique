<template>
  <q-layout view="lHh Lpr lFf" >
      <!-- Page content -->
      <q-page-container>
        <router-view />
      </q-page-container>

    <!-- If the user is logged -->
    <div>
      <!-- Menu -->
      <div class="menu-container">
        <a :href="link.link" class="menu-item" :class="{'menu-item-active': checkCurrentTab(link.link)}" v-for="link in essentialLinks">
          <i :class="link.icon"></i>
          <p>{{link.title}}<span>•</span></p>
        </a>
      </div>
      <router-link to="cart" style="position:absolute;top:200px;left:50px;">Bonjour</router-link>
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
        console.log(this.currentTab, currentItemName)
        if(this.currentTab == currentItemName) return true;
        return false;
    },
    changeMenu(){
      this.currentTab = this.$router.currentRoute.path;
    },
    changeTabTest() {
      this.currentTab = "/cart"
    }
  },
  beforeMount(){
    this.changeMenu();
  }
}
</script>
