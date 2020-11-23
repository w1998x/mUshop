// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//全局引入阿里矢量图标
import './assets/font/iconfont.css'
//引入全局js
import './assets/js/remScale'
//全局引入css
import './assets/css/reset.css'

//引入vanUI框架
import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'

//引入全局组件
import comComponent from './commen'


for(let i in comComponent){
  Vue.component(i,comComponent[i])
}

Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
