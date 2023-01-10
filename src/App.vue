<template>
  <div class="app">
    <AppHeader />
    <EatenCalories class="eaten-calories" />
  </div>
</template>

<script>
import EatenCalories from "./components/EatenCalories.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    EatenCalories,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Open Sans, sans-serif;
}
:root {
  --dark-color: #181818;
  --darker-color: #1f1f1f;
  --lighter-color: #252525;
  --light-color: #3c3c3c;
  --super-light-color: #666666;
  background-color: var(--super-light-color);
  min-height: 100vh;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
}

body {
  padding: 0;
  margin: 0;
}
button {
  cursor: pointer;
}
.container {
  width: 100%;
  padding: 5px 10px;
  margin: 0;
}
.eaten-calories {
  width: 100%;
  flex-grow: 1;
}
h1,
h2,
h3,
h4,
li {
  color: #ffffff;
}
h1 {
  /* display: inline-block; */
  text-align: center;
  font-size: 32px;
  margin: 0;
  padding: 0;
}
h2 {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
h3 {
  font-size: 14px;
  padding: 0;
  margin: 0;
}
</style>
