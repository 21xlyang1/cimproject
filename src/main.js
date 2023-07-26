import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VIcon from './components/v-icon/index.vue'
import  VueCookies  from 'vue-cookies'

Vue.component('v-icon',VIcon)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
