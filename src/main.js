import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faFingerprint,
  faIdCard,
  faKey,
  faLock,
  faUser,
  faPercentage,
  faUsers,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./index.css";

library.add(
  faKey,
  faLock,
  faCheckCircle,
  faUser,
  faFingerprint,
  faIdCard,
  faPercentage,
  faUsers,
  faHistory
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
