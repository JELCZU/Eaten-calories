<template>
  <div class="eaten-calories">
    <div class="container-outer">
      <div class="container">
        <SingleMeal
          class="meal-container"
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
      <button class="add-meal" @click="addMeal">
        <font-awesome-icon class="add-meal-ico" icon="fa-solid fa-plus" />
      </button>
      <!-- <div>{{ meals }}</div> -->
    </div>
    <AllNutrients class="all-nutrients" :meals="meals" />
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
      testVar: [],
    };
  },
  methods: {
    addMeal() {
      this.meals.push({
        name: `Meal ${this.meals.length + 1}`,
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
        name: `Product ${this.meals[mealIndex].mealElements.length + 1}`,
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
    MealElementChange(mealId, mealElementId, mealElementProperty, value) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      this.meals[mealIndex].mealElements[mealElementIndex][
        mealElementProperty
      ] = value;
    },
    edit(mealId, item) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      this.meals[mealIndex].nameEdit = true;
      if (!item) {
        window.console.log("aaa");
      }
      // window.console.log(meal);
      // window.console.log(item.target.parentElement.parentElement.children);
      // window.console.log("aaa");
      // eslint-disable-next-line no-param-reassign
    },
    save(mealId, event) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      if (event.target.value !== "" && event.target.value.trim().length !== 0) {
        // eslint-disable-next-line no-param-reassign
        this.meals[mealIndex].name = event.target.value;
      }
      this.esc(mealId);
    },
    esc(mealId) {
      // eslint-disable-next-line no-param-reassign
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      this.meals[mealIndex].nameEdit = false;
    },
  },
};
</script>

<style scoped>
.add-meal-ico {
  color: green;
  font-size: 30px;
}
.add-meal-ico:hover {
  color: rgb(0, 155, 0);
}
.all-nutrients {
  width: 100%;
}
button {
  background-color: transparent;
  width: fit-content;
  border-style: none;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.container-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}
.eaten-calories {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
}
.meal-container {
  background-color: var(--light-color);
  border-color: var(--darker-color);
  border-style: solid;
  width: 100%;
}
</style>
