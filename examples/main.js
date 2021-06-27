import Vue from 'vue';
import App from './App.vue';
import HaTabs from '../lib/ha-tabs.umd.min.js';
import '../lib/ha-tabs.css';
Vue.config.productionTip = false;

Vue.use(HaTabs);
new Vue({
  render: h => h(App)
}).$mount('#app');
