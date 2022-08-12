<template>
  <div id="app" class="h-screen w-screen">
    <NavBar></NavBar>
    <component :is="compName"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import LoginPage from './components/LoginPage.vue'
import AdminPage from './components/AdminPage.vue'
import ClientPage from './components/ClientPage.vue'

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar,
    LoginPage,
    AdminPage,
    ClientPage,
  },
  data() {
    return {
      // compName: null
    }
  },
  methods: {
    ...mapActions(['fetchPizzas']),
    
  },
  computed: {
    ...mapGetters(['getUser']),
    compName() {
      if (!this.getUser.is_admin && this.getUser.password !== null) {
        return ClientPage
      }
      else if (this.getUser.is_admin) {
        return AdminPage
      }
      else if (this.getUser.password == null) return LoginPage
      return LoginPage
    }
  },
  mounted() {
    this.fetchPizzas()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
