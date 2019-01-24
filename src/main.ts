import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
