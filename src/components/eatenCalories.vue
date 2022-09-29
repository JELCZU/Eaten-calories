<template>
  <div class="eatenCaloriesWrapper">
    <div>
      <SingleMeal
        @removeMealClicked="removeMeal"
        @addMealElementClicked="addMealElement"
        @removeMealElementClicked="removeMealElement"
        v-for="meal in meals"
        :key="meal.id"
        :meal="meal"
      />
    </div>
    <button class="addMeal" @click="addMeal">
      <div style="transform: translateY(-2px) translateX(-0px)">+</div>
    </button>
    <div>{{ meals }}</div>
  </div>
</template>

<script>
import SingleMeal from "./SingleMeal.vue";

export default {
  name: "eatenCalories",
  components: {
    SingleMeal,
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
        mealElements: [],
        id: Math.random(),
      });
    },
    removeMeal(mealId) {
      window.console.log("aaaa");
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      this.meals.splice(mealIndex, 1);
    },
    addMealElement(mealId) {
      // window.console.log(this.meal.mealElements);
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
      window.console.log(mealId + "  " + mealElementId);
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      this.meals[mealIndex].mealElements.splice(mealElementIndex, 1);
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
}
</style>
