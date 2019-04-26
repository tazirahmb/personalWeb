import Vue from 'vue';
import Vuedisqus from 'vue-disqus'
import App from './App.vue';
import router from './router';
import 'bootstrap'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-markdown-loader'

Vue.config.productionTip = false;
Vue.use(Vuedisqus);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
