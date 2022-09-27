<template>
  <div class="singleMealWrapper">
    <div class="singleMealRibbon">
      <label style="display: inline-block; vertical-align: middle">{{
        item.name
      }}</label>
      <button
        class="removeMeal"
        style="display: inline-block; vertical-align: middle; margin-left: 90%"
        @click="removeItem(item.id)"
      >
        <div style="transform: translateY(-16px) translateX(-2px)">-</div>
      </button>
    </div>
    <div class="mealElement">
      <MealElementLegendRow />
      <MealElement
        v-for="mealElement in item.mealElements"
        :key="mealElement.id"
        :item="mealElement"
        @removeClicked="removeItem"
      />
    </div>
    <div style="padding-top: 10px; padding-bottom: 5px">
      <button class="addMealElementbutton" @click="addMealElement">
        <div style="transform: translateY(-2px) translateX(-0px)">+</div>
      </button>
    </div>

    <!-- <div><SingleMealNutrients /></div> -->
  </div>
</template>

<script>
import MealElementLegendRow from "./MealElementLegendRow.vue";
import MealElement from "./MealElement.vue";
// import SingleMealNutrients from "./SingleMealNutrients.vue";
export default {
  props: ["item"],
  components: {
    MealElementLegendRow: MealElementLegendRow,
    MealElement: MealElement,
  },
  data() {
    return {
      mealElements: [],
    };
  },
  methods: {
    addMealElement() {
      this.$emit("addMealElementClicked");
    },
    removeItem() {
      this.$emit("removeClicked", this.item.id);
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
  font-size: 24px;
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
}
</style>
