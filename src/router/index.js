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
    { path: "/", name:'main', component: MainView },
    { path: "/TestView", name:'test', component: TestView, props:true },
    { path: "/ResultView", name:'result', component: ResultView, props:true },
  ],
});
