<template>
  <div class="wrapper">
    <div>Consumpted nutrients</div>
    <SingleMeal />
  </div>
</template>

<script>
import singleMeal from "./components/SingleMeal.vue";

export default {
  components: {
    singleMeal: singleMeal,
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
  width: 100%;
  margin: 0;
  padding: 30px;
}
</style>
