<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: "KOTRAHOPE";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2")
    format("woff2");
  font-weight: normal;
  font-style: normal;
}
html {
  font-size: 16px;
}
#app {
  font-family: "KOTRAHOPE";
  max-width: 760px;
  margin: auto;
  height: 100vh;
}
</style>
