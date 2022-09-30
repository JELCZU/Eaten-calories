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
              v-model="this.mealElement.name"
            />
          </td>
          <td>
            <input
              type="number"
              min="0"
              placeholder="Weight"
              v-model="this.mealElement.weight"
            />
            <label>g</label>
          </td>
          <td>
            <input
              type="number"
              min="0"
              placeholder="Proteins"
              v-model="this.mealElement.proteins"
            />
            <label>g</label>
          </td>
          <td>
            <input
              type="number"
              min="0"
              placeholder="Carbs"
              v-model="this.mealElement.carbs"
            />
            <label>g</label>
          </td>
          <td>
            <input
              type="number"
              min="0"
              placeholder="Fat"
              v-model="this.mealElement.fat"
            />
            <label>g</label>
          </td>
          <td>
            <input
              style="display: inline-block"
              type="number"
              min="0"
              placeholder="kcal"
              v-model="this.mealElement.kcal"
            />
            <div style="display: inline-block"><label>kcal</label></div>
            <div style="display: inline-block">
              <button
                class="removeMealElementbutton"
                @click="$emit('removeMealElementClicked', mealElement.id)"
              >
                <div style="transform: translateY(-16px) translateX(-1px)">
                  -
                </div>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealElement",
  props: ["mealElement"],
  methods: {},
};
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
  font-weight: normal;
  white-space: nowrap;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  padding: 5px;
  background-color: rgb(219, 219, 219);
}
input {
  padding: 5px;
  width: 50%;
  font-size: 12px;
}
label {
  padding-left: 5px;
}
.removeMealElementbutton {
  color: red;
  transform: translateY(-16px) translateX(22px);
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 36px;
  font-weight: normal;
  position: absolute;
  cursor: pointer;
}
</style>
