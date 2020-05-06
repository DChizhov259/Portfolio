import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import adminAbout from "./adminAbout.vue";
// import adminWorks from "./adminWorks.vue";
// import adminReviews from "./adminReviews.vue";

const routes = [
  // {
  //   path: "/about",
  //   component: adminAbout
  // },
  // {
  //   path: "/works",
  //   component: adminWorks
  // },
  // {
  //   path: "/reviews",
  //   component: adminReviews
  // }
];

export default new VueRouter({ routes, mode: "history" });
