// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper)

if (true) {
	// localhost:3000 等价于 127.0.0.1
	window.apiAddress = "http://127.0.0.1:3000"
}else{
	window.apiAddress = "http://120.25.107.16:3000"
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
