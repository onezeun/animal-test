import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

const KAKAKO_API_KEY = '314f25c5c54567722bd749e73589765e';
window.Kakao.init(KAKAKO_API_KEY);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
