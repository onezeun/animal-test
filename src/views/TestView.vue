<template>
  <v-main class="test_content">
    <v-progress-linear v-model="progressValue" height="25" class="progress_bar" color="#5eb5e0">
      <span> {{ count? Math.ceil(count) : 1 }} / 12</span>
    </v-progress-linear>

    <v-scroll-x-reverse-transition mode="out-in">
      <div v-if="count - 1 == question.id" class="questions_wrap" v-for="question in questionsList" :key="question.id">
        <div class="qestions_title">
          <h1>Q. {{ count? Math.ceil(count) : 1 }}</h1>
          <h2>{{ question.title }}</h2>
        </div>

        <button class="result_btn btnA" @click=resultA()>{{ question.A }}</button>
        <button class="result_btn btnB" @click=resultB()>{{ question.B }}</button>
      </div>
    </v-scroll-x-reverse-transition>
  </v-main>
</template>

<script>
import router from '@/router';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Questions',
  data: () => ({
    mbti: '',
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

    plusNum() {
      var router = this.$router;

      if (this.count < 12) {
        this.count += 1;
        this.progressValue = (100 / 12) * this.count;
      } else if (this.count >= 12) {
        if (this.E == 2) {
          this.mbti += "E";
        } else {
          this.mbti += "I";
        }
        if (this.S == 2) {
          this.mbti += "S";
        } else {
          this.mbti += "N";
        }
        if (this.T == 2) {
          this.mbti += "T";
        } else {
          this.mbti += "F";
        }
        if (this.J == 2) {
          this.mbti += "J";
        } else {
          this.mbti += "P";
        }

        router.push({
          name: 'result',
          query: { value: this.mbti }
        });
      }
    },

    resultA() {
      this.plusNum();
      const result_type = this.questionsList[this.count - 2].type;

      if (result_type == "EI") {
        this.E++;
      };

      if (result_type == "SN") {
        this.S++;
      };

      if (result_type == "TF") {
        this.T++;
      };

      if (result_type == "JP") {
        this.J++;
      };
    },
    resultB() {
      this.plusNum();
      const result_type = this.questionsList[this.count - 2].type;

      if (result_type == "EI") {
        this.I++;
      };

      if (result_type == "SN") {
        this.N++;
      };

      if (result_type == "TF") {
        this.F++;
      };

      if (result_type == "JP") {
        this.P++;
      };
    }
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
  padding: 20px 10px;
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

@media screen and (min-width: 769px) {
  .result_btn:hover {
    background: #49a5d3;
  }
}
</style>
