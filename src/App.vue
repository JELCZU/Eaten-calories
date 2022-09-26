<template>
  <div class="wrapper">
    <h1>Consumpted nutrients</h1>
    <div><SingleMeal /></div>
    <button class="addMeal" @click="addMeal">
      <div style="transform: translateY(-2px) translateX(-0px)">+</div>
    </button>
  </div>
</template>

<script>
import SingleMeal from "./components/SingleMeal.vue";

export default {
  components: {
    SingleMeal: SingleMeal,
  },
  data() {
    return {
      meals: [],
    };
  },
  methods: {
    addMeal() {
      alert("MealAdded");
      // this.items.push({title:this.newItem,
      //   completed:false,
      //   id:Math.random()
      // })
      // this.newItem=""
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%-paddding;
  margin: 0;
  padding: 20px;
  padding-top: 0px;
}
h1 {
  text-align: center;
  padding-top: 0;
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
