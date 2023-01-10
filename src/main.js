import { createApp } from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPenToSquare,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";

/* add icons to the library */
library.add(faPenToSquare, faMinus, faPlus);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
