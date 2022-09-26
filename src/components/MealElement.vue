<template>
  <div class="MealElementWrapper">
    <div>
      <table>
        <tr>
          <td>
            <input style="width: 80%" type="text" placeholder="Product name" />
          </td>
          <td>
            <input type="text" placeholder="Weight" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Proteins" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Carbs" />
            <label>g</label>
          </td>
          <td>
            <input type="text" placeholder="Fat" />
            <label>g</label>
          </td>
          <td>
            <input
              style="display: inline-block"
              type="text"
              placeholder="kcal"
            />
            <div style="display: inline-block"><label>kcal</label></div>
            <div style="display: inline-block">
              <button
                class="removeMealElementbutton"
                @click="removeMealElement"
              >
                <div style="transform: translateY(-16px) translateX(-1px)">
                  -
                </div>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeMealElement() {
      alert("MealElementRemoved");
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
.MealElementWrapper {
  width: 100%-paddding;
  margin-bottom: -1px;
}
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}
td,
tr {
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  border-style: solid;
  border-width: 1px;
  border-color: silver;
  padding: 5px;
  background-color: rgb(219, 219, 219);
}
input {
  padding: 5px;
  width: 50%;
  font-size: 14px;
}
label {
  padding-left: 5px;
}
.removeMealElementbutton {
  color: red;
  transform: translateY(-16px) translateX(22px);
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 36px;
  font-weight: normal;
  position: absolute;
}
</style>
