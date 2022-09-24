<template>
  <div class="MealElementWrapper">
    <div>
      <table>
        <tr>
          <td>
            <input
              style="width: 80%"
              type="text"
              placeholder="Product name"
              v-model="newItem"
            />
          </td>
          <td>
            <input type="text" placeholder="Weight" v-model="newItem" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Proteins" v-model="newItem" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Carbs" v-model="newItem" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Fat" v-model="newItem" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="kcal" v-model="newItem" />
            <label>kcal</label>
          </td>
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
}
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
td,
tr {
  font-size: 14px;
  font-weight: bol;
  white-space: nowrap;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  padding: 10px;
  background-color: rgb(219, 219, 219);
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
