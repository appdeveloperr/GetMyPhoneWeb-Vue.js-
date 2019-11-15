import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import  { rtdbPlugin } from 'vuefire'

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC8INtUKByhRV2bqs2SvaAhQ5YCHLSPevs',
    },
});

Vue.use(rtdbPlugin);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


const routes = [
  {path: '/', component: Login},
  {path:'/Home/:userName', component: Home}
]


const router = new VueRouter({
  routes
})


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
