<template>
  <div class="singleMealWrapper">
    <div class="singleMealRibbon">
      <input
        style="display: inline-block"
        type="text"
        v-if="meal.nameEdit"
        :value="meal.name"
        @blur="$emit('save', meal, $event)"
        @keyup.enter="$emit('save', meal, $event)"
        @keyup.esc="$emit('esc', meal)"
      />
      <span
        style="display: inline-block"
        v-else
        @dblclick="$emit('edit', meal)"
      >
        {{ meal.name }}
      </span>
      <button class="editMealNameBtn" @click="$emit('edit', meal)">
        <i
          class="fa-regular fa-pen-to-square"
          style="display: inline-block"
        ></i>
      </button>
      <button
        class="removeMeal"
        style="display: inline-block; vertical-align: middle; margin-left: 93%"
        @click="$emit('removeMealClicked', meal.id)"
      >
        <div style="transform: translateY(-16px) translateX(-2px)">-</div>
      </button>
    </div>
    <div class="mealElement">
      <MealElementLegendRow />
      <MealElement
        @mealElementChanged="mealElementChanged"
        @removeMealElementClicked="
          $emit('removeMealElementClicked', meal.id, mealElement.id)
        "
        v-for="mealElement in meal.mealElements"
        :key="mealElement.id"
        :mealElement="mealElement"
      />
      <div style="padding: 5px">
        <button
          class="addMealElementbutton"
          @click="$emit('addMealElementClicked', meal.id)"
        >
          <div style="transform: translateY(-2px) translateX(-0px)">+</div>
        </button>
      </div>
      <SingleMealNutrients :meal="meal" />
    </div>
  </div>
</template>

<script>
import MealElementLegendRow from "./MealElementLegendRow.vue";
import MealElement from "./MealElement.vue";
import SingleMealNutrients from "./SingleMealNutrients.vue";
export default {
  name: "SingleMeal",
  props: ["meal"],
  components: {
    MealElementLegendRow,
    MealElement,
    SingleMealNutrients,
  },
  data() {
    return {
      valueLocal: this.value,
    };
  },
  methods: {
    mealElementChanged(mealElementId, mealElementProperty, element) {
      this.$emit(
        "mealElementChanged",
        this.meal.id,
        mealElementId,
        mealElementProperty,
        element
      );
    },
  },
};
</script>

<style scoped>
.singleMealWrapper {
  margin-bottom: 10px;
  border-color: #2d865925;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  background-color: #2d865917;
}
.singleMealRibbon {
  padding-left: 20px;
  background-color: silver;
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.mealElement {
  padding: 20px;
  font-size: 21px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 0;
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
.addMealElementbutton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 22px;
  margin: 0 auto;
  font-weight: bold;
  color: green;
  cursor: pointer;
}
.removeMeal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 36px;
  font-weight: bold;
  color: red;
  transform: translateY(-1px);
  cursor: pointer;
}
.editMealNameBtn {
  background-color: transparent;
  margin-left: 10px;
  border-style: none;
  cursor: pointer;
  border-radius: 100%;
}
.editMealNameBtn:hover {
  color: gray;
}
</style>
