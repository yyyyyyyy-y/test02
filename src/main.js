import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//路由
import router from "@/router/router";
//全局样式
import "@/styles/index.scss"
//element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
