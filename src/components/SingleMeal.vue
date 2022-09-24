<template>
  <div class="singleMealWrapper">
    <div class="singleMealName">Meal name</div>

    <div class="mealElement">
      <div><MealElementLegendRow /></div>
      <div><MealElement /></div>
      <div><MealElement /></div>
    </div>
    <div><SingleMealNutrients /></div>
  </div>
</template>

<script>
import MealElementLegendRow from "./MealElementLegendRow.vue";
import MealElement from "./MealElement.vue";
export default {
  components: {
    MealElementLegendRow: MealElementLegendRow,
    MealElement: MealElement,
  },
};
</script>

<style scoped>
.singleMealWrapper {
  margin: 0;
  border-color: #2d865925;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  background-color: #2d865917;
}
.singleMealName {
  padding: 10px;
  padding-left: 20px;
  background-color: lightgray;
  font-size: 36px;
  font-weight: bold;
  color: white;
}
.mealElement {
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  padding-top: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
  padding: 20px;
  border-spacing: 5px;
}
td,
tr {
  border-style: solid;
  border-width: 1px;
  border-color: red;
  padding: 20px;
  border-collapse: collapse;
}
</style>
