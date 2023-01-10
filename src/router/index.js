import Vue from "vue";
import Router from "vue-router";

// 라우터로 연결할 페이지 가져오기
import MainView from "../views/MainView.vue";
import TestView from "../views/TestView.vue";
import ResultView from "../views/ResultView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: MainView },
    { path: "/TestView", component: TestView },
    { path: "/ResultView", component: ResultView, props:true },
  ],
});
