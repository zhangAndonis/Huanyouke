
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppIndex from '../components/main/AppIndex.vue'
import AppFind from '../components/find/AppFind.vue'
const routes = [
  
  {path:'',redirect:'/index'},
  {path:'/index',name:'index',component:AppIndex},
  {path:'/find',name:'find',component:AppFind},
  {path:'**',redirect: '/index'}
  
]

const router = new Router({
  routes,
})

export default router