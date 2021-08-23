import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faFingerprint,
  faIdCard,
  faKey,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./index.css";

library.add(faKey, faLock, faCheckCircle, faUser, faFingerprint, faIdCard);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
