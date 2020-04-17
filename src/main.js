import Vue from "vue";
import App from "./App.vue";

// ADD THE COMPOSITION API
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
