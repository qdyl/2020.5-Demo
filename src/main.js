import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 以下是按需引用的 vant 
import { Search } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
