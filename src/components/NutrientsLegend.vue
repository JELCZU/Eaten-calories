<template>
  <table>
    <tr>
      <th><h3>Weight</h3></th>
      <th><h3>Proteins</h3></th>
      <th><h3>Carbs</h3></th>
      <th><h3>Fat</h3></th>
      <th><h3>Calories</h3></th>
    </tr>
  </table>
</template>

<script>
export default {
  name: "NutrientsLegend",
};
</script>

<style scoped>
table {
  background-color: var(--lighter-color);

  margin-top: 2px;
  width: 100%;
  border-collapse: collapse;
  border-width: 0;
}
table td,
table th {
  border: 2px solid var(--light-color);
  border-bottom: 0;
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
