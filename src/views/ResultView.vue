<template>
  <v-main class="result_conponent">
    <div v-if="result.mbti == $route.query.value" class="result_wrap" v-for="result in resultList" :key="result.id">
      <h1>나와 어울리는 동물은 바로</h1>
      <!-- 해당 경로를 import한다는 의미로 require를 사용 -->
      <img :src="require(`../assets/images/${result.img}`)" alt="main" class="mainImg" />
      <h2>{{ result.title + result.animal }}</h2>
      <div class="result_box">
        <p>{{ result.content }}</p>
      </div>
      <div class="soulmate">
        <div v-if="soulmate.mbti == result.soulmate" v-for="soulmate in resultList" :key="soulmate.id" class="soulmate_good">
          <h3>나와 잘 맞는 친구</h3>
          <img :src="require(`../assets/images/${soulmate.img}`)" />
          <p>{{ soulmate.title + soulmate.animal }}</p>
        </div>
        <div v-if="bad.mbti == result.bad" v-for="bad in resultList" :key="bad.id" class="soulmate_bad">
          <h3>나와 안 맞는 친구</h3>
          <img :src="require(`../assets/images/${bad.img}`)" />
          <p>{{ bad.title + bad.animal }}</p>
        </div>
      </div>
    </div>
    <div class="btn_flex">
      <router-link to="/" class="goTest">다시 검사하기</router-link>
      <router-link to="/" class="goTest">카카오톡 공유하기</router-link>
    </div>
    <div class="pitapet_link">
      <p>반려동물을 기르고 계시다면? </p>
      <router-link to="#" class="pitapet_btn">반려동물 자랑하러가기</router-link>
    </div>
  </v-main>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'result',
  methods: {
    ...mapActions(["getResult"])
  },
  computed: mapGetters(["resultList"]),
  created() {
    this.getResult();
  },
}

</script>

<style scoped>
.result_conponent {
  text-align: center;
  padding-top: 50px !important;
}

h1 {
  border: 1px solid white;
  text-shadow: 0 3px 3px grey;
  font-size: 2.5rem;
}

h2 {
  color: #5eb5e0;
  font-size: 2.2rem;
}

.result_box {
  border: 1px solid #ccc;
  margin: 2%;
  padding: 2%;
}

.result_box p {
  font-size: 1.5rem;
  font-weight: 100;
}

.mainImg {
  max-width: 256px;
  max-height: 256px;
  width: 70%;
  height: 70%;
  margin: 40px auto;
  object-fit: contain;
}

.soulmate {
  margin: 2%;
  display: flex;
  justify-content: space-between;
}

.soulmate>div {
  border: 1px solid #ccc;
  width: 48%;
  padding: 15px 0;
}

.soulmate img {
  max-width: 100px;
  max-height: 100px;
}

.soulmate p,
.soulmate h3 {
  font-size: 1.3rem;
}

.btn_flex {
  display: flex;
  justify-content: space-between;
  margin: 50px 2%;
}

.goTest {
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  display: block;
  height: 50px;
  width: 48%;
  box-shadow: 0 3px 0 #0e5c83;

  color: white;
  background: #5eb5e0;
  border-radius: 5px;
  font-size: 1.5rem;
}

.goTest:active {
  background: #49a5d3;
  box-shadow: 0 0px 0 #0e5c83;
  transform: translateY(0.2em);
}

.goTest:hover {
  background: #49a5d3;
}

.pitapet_link p {
  font-size: 1.3rem;
  margin: 30px 0 5px;
  color: #505050;
}

.pitapet_btn{
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  display: block;
  height: 50px;
  width: 70%;
  margin: 0 auto 50px;
  box-shadow: 0 3px 0 #ffc628;

  color: #505050;
  background: #FFEAAF;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 100;
}
.pitapet_btn:active {
  background: #ffdc7b;
  box-shadow: 0 0px 0 #ffc628;
  transform: translateY(0.2em);
}

.pitapet_btn:hover {
  background: #ffdc7b;
}

</style>
