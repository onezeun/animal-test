<template>
  <v-main class="main_conponent">
    <h1>나와 어울리는 동물은?</h1>
    <img src="../assets/images/thinking-face.gif" alt="main" class="mainImg" />
    <p>재미로보는 MBTI 유형별<br /> 어울리는 동물 테스트</p>
    <router-link :to="{ name: 'test' }" class="goTest">테스트하러가기</router-link>
  </v-main>
</template>

<script></script>

<style scoped>
.main_conponent {
  text-align: center;
  padding-top: 50px !important;
}

h1 {
  border: 1px solid white;
  text-shadow: 0 3px 3px grey;
  font-size: 2.5rem;
}

p {
  font-size: 1.5rem;
  color: #8c8c8c;
}

.mainImg {
  max-width: 256px;
  max-height: 256px;
  width: 70%;
  height: 70%;
  margin: 40px auto;
  object-fit: contain;
}

.goTest {
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  display: block;
  height: 50px;
  width: 70%;
  margin: 50px auto 0;
  box-shadow: 0 3px 0 #0e5c83;

  color: white;
  background: #5eb5e0;
  border-radius: 5px;
  font-size: 1.8rem;
}

.goTest:active {
  background: #49a5d3;
  box-shadow: 0 0px 0 #0e5c83;
  transform: translateY(0.2em);
}


@media screen and (min-width: 769px) {
  .goTest:hover {
    background: #49a5d3;
  }
}
</style>
