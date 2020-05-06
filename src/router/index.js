import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Dashboard from '@/pages/Dashboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/show',
      component: () => import('@/pages/show-content'),
      name: 'ShowContent',
      meta: {
        title: 'Show Content',
        icon: 'form'
      }
    },
    {
      path: '/create',
      component: () => import('@/pages/create'),
      name: 'CreateArticle',
      meta: {
        title: 'Create Article',
        icon: 'edit'
      }
    },

  ]
})
