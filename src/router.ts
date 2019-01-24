import Vue from 'vue'
import Router from 'vue-router'
import RepositoryList from './views/RepositoryList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RepositoryList',
      component: RepositoryList
    }
  ]
})
