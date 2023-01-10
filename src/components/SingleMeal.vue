<template>
  <div class="single-meal">
    <div class="meal-ribbon">
      <div class="meal-name">
        <input
          type="text"
          v-if="meal.nameEdit"
          :value="meal.name"
          @blur="$emit('save', meal.id, $event)"
          @keyup.enter="$emit('save', meal.id, $event)"
          @keyup.esc="$emit('esc', meal.id)"
        />

        <h2 v-else @dblclick="$emit('edit', meal.id)">
          {{ meal.name }}
        </h2>
        <button @click="$emit('edit', meal.id, $event)">
          <font-awesome-icon
            class="edit-name"
            icon="fa-solid fa-pen-to-square"
          />
        </button>
      </div>
      <button @click="$emit('removeMealClicked', meal.id)">
        <font-awesome-icon class="remove-meal" icon="fa-solid fa-minus" />
      </button>
    </div>
    <NutrientsLegend />
    <div class="meal-elements">
      <MealElement
        @mealElementChanged="mealElementChanged"
        @removeMealElementClicked="
          $emit('removeMealElementClicked', meal.id, mealElement.id)
        "
        v-for="mealElement in meal.mealElements"
        :key="mealElement.id"
        :mealElement="mealElement"
      />

      <button @click="$emit('addMealElementClicked', meal.id)">
        <font-awesome-icon class="add-meal-element" icon="fa-solid fa-plus" />
      </button>

      <SingleMealNutrients class="meal-nutrients" :meal="meal" />
    </div>
  </div>
</template>

<script>
import MealElement from "./MealElement.vue";
import SingleMealNutrients from "./SingleMealNutrients.vue";
import NutrientsLegend from "./NutrientsLegend.vue";

export default {
  name: "SingleMeal",
  props: ["meal"],
  components: {
    MealElement,
    SingleMealNutrients,
    NutrientsLegend,
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
.add-meal-element {
  color: green;
  font-size: 30px;
}
.add-meal-element:hover {
  color: rgb(0, 155, 0);
}

button {
  background-color: transparent;
  border-style: none;
  margin: 0;
  padding: 0;
}
.edit-name {
  color: white;
  font-size: 16px;
}
.meal-name {
  display: flex;
  gap: 5px;
}
.meal-elements {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.meal-nutrients {
  width: 100%;
}
.meal-ribbon {
  align-items: center;
  background-color: var(--darker-color);
  display: flex;
  justify-content: space-between;
  padding: 2px;
}

.remove-meal {
  color: red;
  font-size: 30px;
}
.remove-meal:hover {
  color: rgb(255, 56, 56);
}
</style>
