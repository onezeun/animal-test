import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

const KAKAKO_API_KEY = 'api';
window.Kakao.init(KAKAKO_API_KEY);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
