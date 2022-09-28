<template>
  <div class="wrapper">
    <AppHeader />
    <!-- <EatenCalories /> -->
  </div>
</template>

<script>
// import EatenCalories from "./components/eatenCalories.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    // EatenCalories,
    AppHeader,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 0;
}
</style>
