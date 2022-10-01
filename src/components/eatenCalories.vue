<template>
  <div class="eatenCaloriesWrapper">
    <div>
      <SingleMeal
        @removeMealClicked="removeMeal"
        @addMealElementClicked="addMealElement"
        @removeMealElementClicked="removeMealElement"
        @MealElementChanged="MealElementChange"
        @edit="edit"
        @save="save"
        @esc="esc"
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
      />
    </div>
    <button class="addMeal" @click="addMeal">
      <div style="transform: translateY(-2px) translateX(-0px)">+</div>
    </button>
    <div>{{ meals }}</div>
    <AllNutrients :meals="meals" />
  </div>
</template>

<script>
import SingleMeal from "./SingleMeal.vue";
import AllNutrients from "./AllNutrients.vue";
export default {
  name: "eatenCalories",
  components: {
    SingleMeal,
    AllNutrients,
  },

  data() {
    return {
      meals: [],
    };
  },
  methods: {
    addMeal() {
      this.meals.push({
        name: "Meal " + (this.meals.length + 1),
        nameEdit: false,
        mealElements: [],
        id: Math.random(),
      });
    },
    removeMeal(mealId) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      this.meals.splice(mealIndex, 1);
    },
    addMealElement(mealId) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      this.meals[mealIndex].mealElements.push({
        name: "Product " + (this.meals[mealIndex].mealElements.length + 1),
        weight: 0,
        proteins: 0,
        carbs: 0,
        fat: 0,
        kcal: 0,
        id: Math.random(),
      });
    },
    removeMealElement(mealId, mealElementId) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      this.meals[mealIndex].mealElements.splice(mealElementIndex, 1);
    },
    // mealElementNameChanged(mealId, mealElementId, mealElementName) {
    //   const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
    //   const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
    //     (mealElement) => mealElement.id === mealElementId
    //   );
    //   this.meals[mealIndex].mealElements[mealElementIndex].name =
    //     mealElementName;
    // },
    MealElementChange(mealId, mealElementId, mealElementProperty, value) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      this.meals[mealIndex].mealElements[mealElementIndex][
        mealElementProperty
      ] = value;
    },
    edit(meal) {
      meal.nameEdit = true;
      // edit = false;
    },
    save(meal, event) {
      if (
        (event.target.value != "") &
        (event.target.value.trim().length != 0)
      ) {
        meal.name = event.target.value;
      }
      this.esc(meal);
    },
    esc(meal) {
      meal.nameEdit = false;
    },
  },
};
</script>

<style scoped>
.eatenCaloriesWrapper {
  width: 100%-paddding;
  margin: 0;
  padding: 20px;
  padding-top: 0px;
}

.addMeal {
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
</style>
