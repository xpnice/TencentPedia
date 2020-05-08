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
      path: '/ViewArticle',
      component: () => import('@/pages/ViewArticle'),
      name: 'ViewArticle',
      meta: {
        title: 'ViewArticle',
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
