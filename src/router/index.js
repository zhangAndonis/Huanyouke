
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppIndex from '../components/main/AppIndex.vue'
import AppMore from '../components/main/AppMore.vue'
import AppFind from '../components/find/AppFind.vue'
import AppNearby from '../components/main/AppNearby.vue'
import AppDestination from '../components/main/AppDestination.vue'
import AppHotel from '../components/main/AppHotel.vue'
import AppFood from '../components/main/AppFood.vue'
import AppMap from '../components/main/AppMap.vue'
import AppTravel from '../components/travel/AppTravel.vue'
import AppTraveldetail from '../components/travel/AppTraveldetail.vue'
import AppWriteTravel from '../components/find/AppWriteTravel.vue'
import AppWriteTravelnext from '../components/find/AppWriteTravelnext.vue'
import AppEveryonenext from '../components/find/AppEveryonenext.vue'
import AppEveryone from '../components/find/AppEveryone.vue'
import AppMine from '../components/mine/AppMine.vue'
import Appmyyouji from '../components/mine/Appmyyouji.vue'
import Appmyquestion from '../components/mine/Appmyquestion.vue'
import AppLoginRegister from '../components/mine/AppLoginRegister.vue'
import AppNode from '../components/mine/AppNote.vue'
import AppQuickRegister from '../components/mine/AppQuickRegister.vue'
import AppForgetPassword from '../components/mine/AppForgetPassword.vue'
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import AppClickHeader from '../components/mine/AppClickHeader.vue'
import AppMyCollection from '../components/mine/AppMyCollection.vue'
import AppMyTravels from '../components/mine/AppMyTravels.vue'
import AppMyComment from '../components/mine/AppMyComment'
import AppMyQuestionAnswer from '../components/mine/AppMyQuestionAnswer'
import AppAboutApp from '../components/mine/AppAboutApp'
import AppAboutUs from '../components/mine/AppAboutUs'
import AppFeedback from '../components/mine/AppFeedback'
=======
>>>>>>> master
>>>>>>> llc
=======
import AppSearch from '../components/main/AppSearch.vue'
import AppDetail from '../components/main/detail/AppDetail.vue'
import AppDetail1 from '../components/main/detail/AppDetail1.vue'
import AppDetail2 from '../components/main/detail/AppDetail2.vue'
import AppSearchChild from '../components/main/AppSearchChild.vue'
>>>>>>> zhangAndonis
const routes = [
  
  {path:'',redirect:'/index'},
  {path:'/index',name:'index',component:AppIndex},
  {path:'/more',name:'more',component:AppMore},
  {path:'/searchchlid',name:'searchchlid',component:AppSearchChild},
  {path:'/find',name:'find',component:AppFind},
  {path:'/detail',name:'detail',component:AppDetail},
  {path:'/detail1',name:'detail1',component:AppDetail1},
  {path:'/detail12',name:'detail2',component:AppDetail2},
  {path:'/search',name:'search',component:AppSearch},
  {path:'/travel',name:'travel',component:AppTravel},
  {path:'/traveldetail',name:'traveldetail',component:AppTraveldetail},
  {path:'/writetravel',name:'writetravel',component:AppWriteTravel},
  {path:'/writetravelnext',name:'writetravelnext',component:AppWriteTravelnext},
  {path:'/everyone',name:'everyone',component:AppEveryone},
  {path:'/mine',name:'mine',component:AppMine},
<<<<<<< HEAD
<<<<<<< HEAD
  {path:'/mine/AppLoginRegister',name:'AppLoginRegister',component:AppLoginRegister},
  {path:'/mine/AppNode',name:'AppNode',component:AppNode},
  {path:'/mine/AppQuickRegister',name:'AppQuickRegister',component:AppQuickRegister},
  {path:'/mine/AppForgetPassword',name:'AppForgetPassword',component:AppForgetPassword},
<<<<<<< HEAD
=======
<<<<<<< HEAD
  {path:'/mine/AppClickHeader',name:'AppClickHeader',component:AppClickHeader},
  {path:'/mine/AppMyCollection',name:'AppMyCollection',component:AppMyCollection},
  {path:'/mine/AppMyTravels',name:'AppMyTravels',component:AppMyTravels},
  {path:'/mine/AppMyComment',name:'AppMyComment',component:AppMyComment},
  {path:'/mine/AppMyQuestionAnswer',name:'AppMyQuestionAnswer',component:AppMyQuestionAnswer},
  {path:'/mine/AppAboutApp',name:'AppAboutApp',component:AppAboutApp},
  {path:'/mine/AppAboutUs',name:'AppAboutUs',component:AppAboutUs},
  {path:'/mine/AppFeedback',name:'AppFeedback',component:AppFeedback},
=======
>>>>>>> master
>>>>>>> llc
=======
=======
  {path:'/myyouji',name:'myyouji',component:Appmyyouji},
  {path:'/question',name:'question',component:Appmyquestion},
  {path:'/everyonenext',name:'everyonenext',component:AppEveryonenext},
>>>>>>> zhangAndonis
  {path:'/AppLoginRegister',name:'AppLoginRegister',component:AppLoginRegister},
  {path:'/AppNode',name:'AppNode',component:AppNode},
  {path:'/AppQuickRegister',name:'AppQuickRegister',component:AppQuickRegister},
  {path:'/AppForgetPassword',name:'AppForgetPassword',component:AppForgetPassword},
>>>>>>> zhangAndonis
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