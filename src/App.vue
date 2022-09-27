<template>
  <div class="wrapper">
    <h1>Consumpted nutrients</h1>
    <EatenCalories />
  </div>
</template>

<script>
import EatenCalories from "./components/eatenCalories.vue";

export default {
  components: {
    EatenCalories: EatenCalories,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 0;
}
</style>
