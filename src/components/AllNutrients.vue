<template>
  <div class="nutrients">
    <table>
      <tr>
        <th><h2>Weight</h2></th>
        <th><h2>Proteins</h2></th>
        <th><h2>Carbs</h2></th>
        <th><h2>Fat</h2></th>
        <th><h2>Calories</h2></th>
      </tr>
      <tr>
        <td>
          <h2>{{ wholeDayNutrientsSum("weight") }}g</h2>
        </td>
        <td>
          <h2>{{ wholeDayNutrientsSum("proteins") }}g</h2>
        </td>
        <td>
          <h2>{{ wholeDayNutrientsSum("carbs") }}g</h2>
        </td>
        <td>
          <h2>{{ wholeDayNutrientsSum("fat") }}g</h2>
        </td>
        <td>
          <h2>{{ wholeDayNutrientsSum("kcal") }}kcal</h2>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AllNutrients",
  props: ["meals"],
  components: {},
  methods: {
    wholeDayNutrientsSum(nutrient) {
      let summariedNutients = 0;
      this.meals.forEach((meal) => {
        meal.mealElements.forEach((mealElement) => {
          summariedNutients += mealElement[nutrient] * 10;
        });
      });
      return summariedNutients / 10;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.nutrients {
  background-color: var(--darker-color);
  border-color: var(--darker-color);
  border-style: solid;
  border-width: 2px 0;
}
table {
  /* border: solid; */
  width: 100%;
  border-collapse: collapse;
  border-width: 0;
}
table td,
table th {
  border: 2px solid var(--super-light-color);
}
table tr:first-child th {
  border-top: 0;
}
table tr:last-child td {
  border-bottom: 0;
}
table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}
th,
td {
  padding: 5px;
  width: 20%;
}
</style>
