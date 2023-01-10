<template>
  <v-main>
    <v-progress-linear v-model="progressValue" height="25" class="progress_bar" color="#5eb5e0">
      <span> {{ count? Math.ceil(count) : 1 }} / 12</span>
    </v-progress-linear>

    <div v-if="count-1 == question.id" class="questions_wrap" v-for="question in questionsList" :key="question.id">
      <div class="qestions_title">
        <h1>Q. {{ count? Math.ceil(count) : 1 }}</h1>
        <h2>{{ question.title }}</h2>
      </div>

      <button class="result_btn btnA" @click=selectA()>{{ question.A }}</button>
      <button class="result_btn btnB">{{ question.B }}</button>
    </div>
  </v-main>
</template>

<script>
import router from '@/router';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Questions',
  data: () => ({
    count: 1,
    progressValue: 100 / 12,
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  }),
  components: { router },
  methods: {
    ...mapActions(["getQuestions"]),

    selectA() {
      var router = this.$router;

      if (this.count < 12) {
        this.count += 1;
        this.progressValue = (100 / 12) * this.count;
      } else if (this.count >= 12) {
        router.push({
          path: "/ResultView"
        });
      }
    },
  },
  computed: mapGetters(["questionsList"]),
  created() {
    this.getQuestions()
  }
}
</script>

<style>
.qestions_title h1 {
  color: #5eb5e0;
  margin-bottom: 10px;
}

.qestions_title {
  width: 80%;
  height: 200px;
  margin: auto;
  padding: 15% 0 40%;
  text-align: center;
}

.result_btn {
  margin: 50px auto;
  display: block;
  height: 15%;
  width: 80%;
  color: white;
  background: #5eb5e0;
  font-size: 1.3rem;
  border-radius: 10px;
  box-shadow: 0 3px 0 #0e5c83;
}

.result_btn:active {
  background: #49a5d3;
  box-shadow: 0 0px 0 #0e5c83;
  transform: translateY(0.2em);
}

.result_btn:hover {
  background: #49a5d3;
}
</style>
