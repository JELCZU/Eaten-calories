<template>
  <div class="meal-element">
    <div class="top-row">
      <input
        class="product-name"
        type="text"
        placeholder="Product name"
        :value="this.mealElement.name"
        @input="
          $emit(
            'mealElementChanged',
            mealElement.id,
            'name',
            $event.target.value
          )
        "
      />
      <button @click="$emit('removeMealElementClicked', mealElement.id)">
        <font-awesome-icon
          class="remove-meal-element"
          icon="fa-solid fa-minus"
        />
      </button>
    </div>
    <table>
      <tr>
        <td>
          <div>
            <input
              type="number"
              min="0"
              placeholder="Weight"
              :value="this.mealElement.weight"
              @input="
                $emit(
                  'mealElementChanged',
                  mealElement.id,
                  'weight',
                  parseFloat($event.target.value)
                )
              "
              @keypress="validateInput($event, $event.target)"
            />
            <h3>g</h3>
          </div>
        </td>
        <td>
          <div>
            <input
              type="number"
              min="0"
              placeholder="Proteins"
              :value="this.mealElement.proteins"
              @input="
                $emit(
                  'mealElementChanged',
                  mealElement.id,
                  'proteins',
                  parseFloat($event.target.value)
                )
              "
              @keypress="validateInput($event, $event.target)"
            />
            <h3>g</h3>
          </div>
        </td>
        <td>
          <div>
            <input
              type="number"
              min="0"
              placeholder="Carbs"
              :value="this.mealElement.carbs"
              @input="
                $emit(
                  'mealElementChanged',
                  mealElement.id,
                  'carbs',
                  parseFloat($event.target.value)
                )
              "
              @keypress="validateInput($event, $event.target)"
            />
            <h3>g</h3>
          </div>
        </td>
        <td>
          <div>
            <input
              min="0"
              placeholder="Fat"
              :value="this.mealElement.fat"
              @input="
                $emit(
                  'mealElementChanged',
                  mealElement.id,
                  'fat',
                  parseFloat($event.target.value)
                )
              "
              @keypress="validateInput($event, $event.target)"
            />
            <h3>g</h3>
          </div>
        </td>
        <td>
          <div>
            <input
              type="number"
              min="0"
              placeholder="kcal"
              :value="this.mealElement.kcal"
              @input="
                $emit(
                  'mealElementChanged',
                  mealElement.id,
                  'kcal',
                  parseFloat($event.target.value)
                )
              "
              @keypress="validateInput($event, $event.target)"
            />
            <h3>kcal</h3>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MealElement",
  props: ["mealElement"],
  methods: {
    mealElementChange(item) {
      window.console.log(item);
    },
    validateInput(evt, ele) {
      const theEvent = evt || window.event;
      let key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
      const value = ele.value + key;
      const regex = /^\d+(,\d{0,2})?$/;
      if (!regex.test(value)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
button {
  background-color: transparent;
  border-style: none;
  margin: 0;
  padding: 0;
}
input {
  background-color: var(--super-light-color);
  border-style: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 2px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.meal-element {
  align-items: center;
  background-color: var(--lighter-color);
  /* border-style: solid; */
  /* border-color: var(--darker-color); */
  border-width: 2px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
  justify-content: space-between;

  width: 100%;
}
td {
  padding: 5px;
  width: 20%;
}
td > div {
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 1px;
}
td input {
  width: 40px;
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
.top-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
}
.remove-meal-element {
  font-size: 30px;
  color: red;
}
.remove-meal-element:hover {
  color: rgb(255, 56, 56);
}
</style>
