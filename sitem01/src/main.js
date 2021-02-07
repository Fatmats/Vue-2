import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueReseorce from 'vue-resource'
import Firebase from 'firebase'
 
Vue.use(Firebase);

const firebase = require('firebase/app');
require('firebase/app')

Vue.use(VueReseorce);


Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
