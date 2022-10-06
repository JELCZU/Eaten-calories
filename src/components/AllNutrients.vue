<template>
  <div class="AllNutrientsWrapper">
    <div>
      <AllNutrientsLegendRow style="" />
      <table>
        <tr>
          <td>Daily total</td>
          <td>{{ wholeDayNutrientsSum("weight") }}g</td>
          <td>{{ wholeDayNutrientsSum("proteins") }}g</td>
          <td>{{ wholeDayNutrientsSum("carbs") }}g</td>
          <td>{{ wholeDayNutrientsSum("fat") }}g</td>
          <td>{{ wholeDayNutrientsSum("kcal") }}kcal</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AllNutrientsLegendRow from "./AllNutrientsLegendRow.vue";

export default {
  name: "AllNutrients",
  props: ["meals"],
  components: {
    AllNutrientsLegendRow,
  },
  methods: {
    wholeDayNutrientsSum(nutrient) {
      let summariedNutients = 0;
      this.meals.forEach((meal) => {
        meal.mealElements.forEach((mealElement) => {
          summariedNutients += mealElement[nutrient];
        });
      });
      return summariedNutients;
    },
  },
};
</script>

<style scoped>
.MealElementWrapper {
  width: 100%-paddding;
  padding-top: 10px;
  margin-bottom: -1px;
  position: relative;
}
table {
  background-color: rgb(228, 228, 228);
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
td,
tr {
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  border-style: solid;
  border-width: 2px;
  border-color: grey;
  padding: 5px;
  text-align: center;
}
input {
  padding: 5px;
  width: 50%;
  font-size: 14px;
}
label {
  padding-left: 5px;
}
</style>
