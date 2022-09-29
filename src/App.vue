<template>
  <div class="wrapper">
    <AppHeader />
    <EatenCalories />
  </div>
</template>

<script>
import EatenCalories from "./components/EatenCalories.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    EatenCalories,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 0;
}
</style>
