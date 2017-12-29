
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppIndex from '../components/main/AppIndex.vue'
import AppFind from '../components/find/AppFind.vue'
import AppNearby from '../components/main/AppNearby.vue'
import AppDestination from '../components/main/AppDestination.vue'
import AppHotel from '../components/main/AppHotel.vue'
import AppFood from '../components/main/AppFood.vue'
import AppMap from '../components/main/AppMap.vue'
import AppTravel from '../components/travel/AppTravel.vue'
import AppMine from '../components/mine/AppMine.vue'
const routes = [
  
  {path:'',redirect:'/index'},
  {path:'/index',name:'index',component:AppIndex},
  {path:'/find',name:'find',component:AppFind},
  {path:'/travel',name:'travel',component:AppTravel},
  {path:'/mine',name:'mine',component:AppMine},
  {path:'/near',name:'near',component:AppNearby},
  {path:'/destination',name:'destination',component:AppDestination},
  {path:'/hotel',name:'hotel',component:AppHotel},
  {path:'/food',name:'food',component:AppFood},
  {path:'/map',name:'map',component:AppMap},
  {path:'**',redirect: '/index'}
  
]

const router = new Router({
  routes,
})

export default router