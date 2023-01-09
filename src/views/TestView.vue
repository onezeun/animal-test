<template>
  <div id="app">
    <testStepper v-model="steps" />
  </div>
</template>

<script>
import testStepper from "../components/testStepper.vue";

export default {
  components: {
    testStepper,
  },
  data: () => ({
    steps: [
      { label: "step1" },
      { label: "step2" },
      { label: "step3" },
      { label: "step4" },
      { label: "step5" },
      { label: "step6" },
      { label: "step7" },
      { label: "step8" },
      { label: "step9" },
      { label: "step10" },
      { label: "step11" },
      { label: "step12" },
    ],
  }),
};
</script>

<style></style>
