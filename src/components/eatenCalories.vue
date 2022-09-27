<template>
  <div class="eatenCaloriesWrapper">
    <div>
      <SingleMeal
        v-for="item in items"
        :key="item.id"
        :item="item"
        @removeClicked="removeItem"
        @addMealElementClicked="addMealElement"
      />
    </div>
    <button class="addMeal" @click="addMeal">
      <div style="transform: translateY(-2px) translateX(-0px)">+</div>
    </button>
    <div>{{ items }}</div>
  </div>
</template>

<script>
import SingleMeal from "./SingleMeal.vue";

export default {
  components: {
    SingleMeal,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    addMeal() {
      this.items.push({
        name: "Meal " + (this.items.length + 1),
        mealElements: [],
        id: Math.random(),
      });
    },
    removeItem(id) {
      const index = this.items.findIndex((item) => item.id === id);
      window.console.log(this);
      this.items.splice(index, 1);
    },
    addMealElement(item) {
      window.console.log(this);
      this.items.mealElements.push({
        name: "Product name",
        weight: 0,
        proteins: 0,
        carbs: 0,
        fat: 0,
        kcal: 0,
        id: Math.random(),
      });
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
