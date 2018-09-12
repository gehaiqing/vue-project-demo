import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@babel/polyfill'
import { AxiosInstance } from 'axios'
import http from '@/tool/http'
Vue.config.productionTip = false

// 可以在实例中调用，并且有提示
declare module 'vue/types/vue'{
  interface Vue {
    $http: AxiosInstance
  }
}

Vue.use(http)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
