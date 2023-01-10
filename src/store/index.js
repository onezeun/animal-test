import Vue from "vue";
import Vuex from "vuex";
import QuestionModule from './modules/QuestionModule'
import ResultModule from './modules/ResultModule'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    QuestionModule,
    ResultModule,
  },
});
