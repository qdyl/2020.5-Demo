import Vue from 'vue'
import VueRouter from 'vue-router'
import JobCategory from '../views/JobCategory.vue'
// import City from '../views/City.vue'
import JobSearch from '../views/JobSearch.vue'
import Index from '../views/index'
import JobDetail from '../views/JobDetail'
import ErrorPage from '../views/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta:{index:0},
    component: Index
  },
  {
    path: '/jobSearch',
    name: 'JobSearch',
    meta:{index:1},
    component: JobSearch
  },
  {
    path: '/jobDetail',
    name: 'jobDetail',
    meta:{index:1},
    component: JobDetail
  },
  {
    path: '/JobCategory',
    name: 'JobCategory',
    component: JobCategory
  },
  {
    path: '/salary',
    name: 'Salary',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Salary.vue')
  },
  {
    path: '*',
    name: 'error',
    meta:{index:1},
    component: ErrorPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
