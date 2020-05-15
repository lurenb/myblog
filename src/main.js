import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import VueQuillEditor from 'vue-quill-editor';
import './assets/iconfont/iconfont.css'
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import Highlight from './assets/highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);
Vue.config.productionTip = false;


Vue.use(VueQuillEditor)
import axios from 'axios'
//允许跨域请求携带用户凭证cookies 否则session不起作用
axios.defaults.withCredentials = true;//还真是位置的问题
Vue.prototype.$http = axios.create({
  baseURL: 'http://47.110.156.146/api/'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
