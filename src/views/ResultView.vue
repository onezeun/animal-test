<template>
  <v-main class="main_conponent">
    <h1>나와 어울리는 동물은</h1>
    <img src="../assets/images/hamster.gif" alt="main" class="mainImg" />
    <h2>햄스터</h2>
    <div class="result_box">
      <p>결과입니당</p>
    </div>
    <div class="soulmate">
      <div class="soulmate_good">
        <h3>나와 잘 맞는 친구</h3>
        <img src="../assets/images/cat.gif" />
        <p>고양이</p>
      </div>
      <div class="soulmate_bad">
        <h3>나와 안 맞는 친구</h3>
        <img src="../assets/images/lion.gif" />
        <p>사자</p>
      </div>
    </div>
    <router-link to="/MainView" class="goTest">다시 검사하기</router-link>
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

.soulmate > div {
  border: 1px solid #ccc;
  width: 48%;
  padding: 15px 0;
}

.soulmate img {
  max-width: 100px;
  max-height: 100px;
}

.soulmate p, .soulmate h3 {
  font-size: 1.3rem;
}

.goTest {
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  line-height: 50px;
  display: block;
  height: 50px;
  width: 70%;
  margin: 50px auto 50px;
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
</style>
