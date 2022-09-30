<template>
  <div class="MealElementWrapper">
    <div>
      <table>
        <tr>
          <td>Total</td>
          <td>{{ mealElementsSum("weight") }}g</td>
          <td>{{ mealElementsSum("proteins") }}g</td>
          <td>{{ mealElementsSum("carbs") }}g</td>
          <td>{{ mealElementsSum("fat") }}g</td>
          <td>{{ mealElementsSum("kcal") }}kcal</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleMealNutrients",
  props: ["meal"],
  methods: {
    mealElementsSum(nutrient) {
      let summariedNutients = 0;
      this.meal.mealElements.forEach((element) => {
        summariedNutients += element[nutrient];
      });
      return summariedNutients;
    },
  },
};
</script>

<style scoped>
.MealElementWrapper {
  width: 100%-paddding;
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
  font-size: 14px;
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
