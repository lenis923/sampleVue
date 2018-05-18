import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter);
Vue.use(Vuetify)

import '../node_modules/vuetify/dist/vuetify.css'

import dashboard from './Pages/Dashboard.vue'
import setting from './Pages/Setting.vue'

const routes = [
  {path:'/',component:dashboard},
  {path:'/setting',component:setting}
];

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
