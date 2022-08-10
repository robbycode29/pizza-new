<template>
  <div id="app" class="h-screen w-screen">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['fetchPizzas'])
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
