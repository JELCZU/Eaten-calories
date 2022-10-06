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
      testVar: [],
    };
  },
  methods: {
    async addMeal() {
      const meal = {
        name: `Meal ${this.meals.length + 1}`,
        nameEdit: false,
        mealElements: [],
      };
      const res = await fetch(`api/meals`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(meal),
      });
      const data = await res.json();
      this.meals = [...this.meals, data];
    },
    async removeMeal(mealId) {
      // const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      // this.meals.splice(mealIndex, 1);
      const res = await fetch(`api/meals/${mealId}`, {
        method: "DELETE",
      });

      // eslint-disable-next-line no-unused-expressions
      res.status === 200
        ? (this.meals = this.meals.filter((meal) => meal.id !== mealId))
        : // eslint-disable-next-line no-alert
          alert("Error deleting task");
    },
    async addMealElement(mealId) {
      const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      const mealElement = {
        name: `Product ${this.meals[mealIndex].mealElements.length + 1}`,
        weight: 1,
        proteins: 0,
        carbs: 0,
        fat: 0,
        kcal: 0,
        id: Math.random(),
      };
      const mealToEdit = await this.fetchMeal(mealId);
      mealToEdit.mealElements.push(mealElement);
      const { mealElements } = mealToEdit;
      const updMeal = { ...mealToEdit, mealElements };
      const res = await fetch(`api/meals/${mealId}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updMeal),
      });
      const data = await res.json();

      this.meals = this.meals.map((meal) =>
        meal.id === mealId ? { ...meal, mealElements: data.mealElements } : meal
      );
    },
    async removeMealElement(mealId, mealElementId) {
      const mealToEdit = await this.fetchMeal(mealId);
      const mealElementIndex = mealToEdit.mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      mealToEdit.mealElements.splice(mealElementIndex, 1);
      window.console.log(mealToEdit);
      const { mealElements } = mealToEdit;
      const updMeal = { ...mealToEdit, mealElements };
      const res = await fetch(`api/meals/${mealId}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updMeal),
      });
      const data = await res.json();

      this.meals = this.meals.map((meal) =>
        meal.id === mealId ? { ...meal, mealElements: data.mealElements } : meal
      );
    },
    async MealElementChange(mealId, mealElementId, mealElementProperty, value) {
      // const mealIndex = this.meals.findIndex((meal) => meal.id === mealId);
      // const mealElementIndex = this.meals[mealIndex].mealElements.findIndex(
      //   (mealElement) => mealElement.id === mealElementId
      // );
      // this.meals[mealIndex].mealElements[mealElementIndex][
      //   mealElementProperty
      // ] = value;
      /// ////
      const mealToEdit = await this.fetchMeal(mealId);
      const mealElementIndex = mealToEdit.mealElements.findIndex(
        (mealElement) => mealElement.id === mealElementId
      );
      mealToEdit.mealElements[mealElementIndex][mealElementProperty] = value;
      window.console.log(mealToEdit);
      const { mealElements } = mealToEdit;
      const updMeal = { ...mealToEdit, mealElements };
      const res = await fetch(`api/meals/${mealId}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updMeal),
      });
      const data = await res.json();

      this.meals = this.meals.map((meal) =>
        meal.id === mealId ? { ...meal, mealElements: data.mealElements } : meal
      );
    },
    async edit(mealId) {
      const mealToEdit = await this.fetchMeal(mealId);
      const updMeal = { ...mealToEdit, nameEdit: true };
      const res = await fetch(`api/meals/${mealId}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updMeal),
      });
      const data = await res.json();

      this.meals = this.meals.map((meal) =>
        meal.id === mealId ? { ...meal, nameEdit: data.nameEdit } : meal
      );
    },
    async save(mealId, event) {
      // window.console.log(event.target);
      // event.target.focus();
      if (
        // eslint-disable-next-line no-bitwise
        (event.target.value !== "") &
        (event.target.value.trim().length !== 0)
      ) {
        const mealToEdit = await this.fetchMeal(mealId);
        const updMeal = { ...mealToEdit, name: event.target.value };
        const res = await fetch(`api/meals/${mealId}/`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(updMeal),
        });
        const data = await res.json();

        this.meals = this.meals.map((meal) =>
          meal.id === mealId ? { ...meal, name: data.name } : meal
        );
      }

      this.esc(mealId);
    },
    async esc(mealId) {
      const mealToEdit = await this.fetchMeal(mealId);
      const updMeal = { ...mealToEdit, nameEdit: false };
      const res = await fetch(`api/meals/${mealId}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updMeal),
      });
      const data = await res.json();

      this.meals = this.meals.map((meal) =>
        meal.id === mealId ? { ...meal, nameEdit: data.nameEdit } : meal
      );
    },
    async fetchMeals() {
      const res = await fetch("api/meals");
      const data = await res.json();
      return data;
    },
    async fetchMeal(mealId) {
      const res = await fetch(`api/meals/${mealId}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.meals = await this.fetchMeals();
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
