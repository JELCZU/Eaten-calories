<template>
  <div class="nutrients">
    <table>
      <tr>
        <th><h3>Weight</h3></th>
        <th><h3>Proteins</h3></th>
        <th><h3>Carbs</h3></th>
        <th><h3>Fat</h3></th>
        <th><h3>Calories</h3></th>
      </tr>
      <tr>
        <td>
          <h3>{{ mealElementsSum("weight") }}g</h3>
        </td>
        <td>
          <h3>{{ mealElementsSum("proteins") }}g</h3>
        </td>
        <td>
          <h3>{{ mealElementsSum("carbs") }}g</h3>
        </td>
        <td>
          <h3>{{ mealElementsSum("fat") }}g</h3>
        </td>
        <td>
          <h3>{{ mealElementsSum("kcal") }}kcal</h3>
        </td>
      </tr>
    </table>
    <!--  -->
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
        summariedNutients += element[nutrient] * 10;
      });
      return summariedNutients / 10;
    },
  },
};
</script>

<style scoped>
.nutrients {
  background-color: var(--darker-color);
  border-color: var(--darker-color);
  border-style: solid;
  border-width: 2px 0 0 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-width: 0;
}
table td,
table th {
  border: 2px solid var(--light-color);
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
tr {
  padding: 5px;
  width: 20%;
}
h3 {
  text-align: center;
}
</style>
