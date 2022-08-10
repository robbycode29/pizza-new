import Vue from 'vue'
import App from './App.vue'

import './assets/tailwind.css'
import 'tw-elements';

import VueRouter from 'vue-router'
import Vuex from 'vuex'

import routes from './routes'

import pizzaListState from './store/pizzaListState'
import cartHandler from './store/cartHandler'
import orderHandler from './store/orderHandler'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

const store = new Vuex.Store({
  modules: {
    pizzaListState,
    cartHandler,
    orderHandler,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
