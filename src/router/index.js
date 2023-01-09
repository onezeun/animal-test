import Vue from "vue";
import Router from "vue-router";

// 라우터로 연결할 페이지 가져오기
import MainPage from "../views/MainPage.vue";
import TeatPage from "../views/TeatPage.vue";
import ResultPage from "../views/ResultPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: MainPage },
    { path: "/TeatPage", component: TeatPage },
    { path: "/ResultPage", component: ResultPage },
  ],
});
