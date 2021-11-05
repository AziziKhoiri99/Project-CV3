<template>
  <div>
    <div class="cv">
      <cv />
    </div>
    <div class="cv-dua">
      <cv-dua />
    </div>
  </div>
</template>

<script>
import Cv from "./components/Cv.vue";
import CvDua from "./components/CvDua.vue";

export default {
  name: "app",
  components: {
    Cv,
    CvDua,
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: "Oswald", sans-serif;
  background-color: lightblue;
  padding: 10px;
}
</style>