import Vue from 'vue'
import Router from 'vue-router'
import Repositories from './views/Repositories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'repositories',
      component: Repositories
    }
  ]
})
