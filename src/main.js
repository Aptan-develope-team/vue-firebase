import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./route"
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
