<template>
  <div class="wrapper">
    <div>Consumpted nutrients</div>
    <div class="mealContainter"></div>
    <SingleMeal />
  </div>
</template>

<script>
import SingleMeal from "./components/SingleMeal.vue";

export default {
  components: {
    SingleMeal: SingleMeal,
  },
  // name: "myHeader",
  // data() {
  //   return 0;
  // },
  // meals: [],
  // mealElements: [],
};
</script>

<style scoped>
.wrapper {
  width: 100%-paddding;
  margin: 0;
  padding: 30px;
}
</style>
