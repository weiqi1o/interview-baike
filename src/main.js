import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import $ from "jquery";

import VueAxios from "vue-axios";

Vue.config.productionTip = false;
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
  uploadFileRequest
} from "@/libs/axios";
import { setStore, getStore, removeStore } from "@/libs/storage";
import { login, search, regist } from "@/api/index";
import "./plugins/iview.js";
Vue.config.productionTip = false;

// 挂载全局使用的方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.patchRequest = patchRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;
Vue.prototype.login = login;
Vue.prototype.search = search;
Vue.prototype.regist = regist;
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
