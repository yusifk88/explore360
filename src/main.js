import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import router from './router'
Vue.use(Vuesax, {
  // options here
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
