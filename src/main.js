import Vue from 'vue'
import App from './App.vue'
import Header from './Components/baice/App_header.vue';

Vue.config.productionTip = false

export const bus = new Vue();

Vue.component('app-header',Header)
new Vue({
  render: h => h(App),
}).$mount('#app')
