<template>
  <div class="MealElementWrapper">
    <div>
      <table>
        <tr>
          <td>Product name:</td>
          <td>Weight:</td>
          <td>Proteins:</td>
          <td>Carbs:</td>
          <td>Fat:</td>
          <td>kcal:</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.MealElementWrapper {
  width: 100%-paddding;
  margin-bottom: -1px;
  position: relative;
}
table {
  background-color: lightgrey;
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
  border-width: 1px;
  border-color: grey;
  padding: 10px;
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
