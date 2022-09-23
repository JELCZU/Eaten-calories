<template>
  <div class="singleMealWrapper">
    <div class="singleMealName">Hello word</div>
    <div class="mealElement">
      <div><MealElement /></div>
      <div><MealElement /></div>
    </div>
    <div class="singleMealNutrients">Hello word</div>
  </div>
</template>

<script>
import MealElement from "./MealElement.vue";
export default {
  components: {
    MealElement: MealElement,
  },
};
</script>

<style scoped>
.singleMealWrapper {
  margin: 0;

  border-color: darkseagreen;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
}
.singleMealName {
  padding: 5px;
  background-color: grey;
  font-size: 21px;
  font-weight: bold;
}
.mealElement {
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
}
</style>
