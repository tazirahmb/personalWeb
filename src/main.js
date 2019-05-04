import Vue from "vue";
import Vuedisqus from "vue-disqus";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "vue-markdown-loader";
import VueShowdown from "vue-showdown";

Vue.config.productionTip = false;
Vue.use(Vuedisqus);
Vue.use(VueShowdown, {
	flavor: "github",
	emoji: "false"
});

new Vue({
	router,
	render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
