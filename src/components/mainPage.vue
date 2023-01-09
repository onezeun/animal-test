<template>
  <div id="app">
    <h1>내가 동물이라면?</h1>
    <img src="../assets/images/thinking-face.gif" alt="main" class="mainImg" />
    <router-link to="/TestView" class="goTest">테스트하러가기</router-link>
  </div>
</template>

<script></script>

<style scoped>
#app {
  text-align: center;
  padding-top: 50px;
}

h1 {
  border: 1px solid white;
  text-shadow: 0 3px 3px grey;
  font-size: 3.5rem;
}

p {
  font-size: 3rem;
  color: #8c8c8c;
}
.mainImg {
  max-width: 256px;
  max-height: 256px;
  width: 70%;
  height: 70%;
  margin: 50px auto;
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

  color: white;
  background: #5eb5e0;
  border-radius: 5px;
  font-size: 2rem;
}
</style>
