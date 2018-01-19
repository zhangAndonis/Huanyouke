<template>
  <div id="app">
      <app-footer v-if="$route.path=='/index' || $route.path=='/find' || $route.path=='/travel' || $route.path=='/mine'"></app-footer> 
    <div class="mask">
    	<img src="./assets/h.jpg" alt="" width="100%" height="100%" class="img1"/>
    	<img src="./assets/y.jpg" alt="" width="100%" height="100%" class="img2"style="display: none;"/>
    	<img src="./assets/k.jpg" alt="" width="100%" height="100%" class="img3"style="display: none;"/>
    	<!--<span style="position: absolute;bottom: 100px;display: block;width: 130px;background: #FFD034;left:122px;height: 30px;border-radius: 30px;text-align: center;line-height: 30px;color: white;" @click="soon()">立即体验</span>-->
    </div>
     <router-view/> 
     
  </div>
</template>

<script>
import AppFooter from './components/main/AppFooter.vue'

// import AppNearby from './components/main/AppNearby.vue'
export default {
  name: 'app',
  components:{
    AppFooter
  },
  data:function() {
    return {
      isFooterShow:true,
      isSelect:false,
      isupdatetShow:false,
      showType:'index'
      
    }
  },
  methods:{
  	bootPage(){
  		setTimeout(function(){
  			document.getElementsByClassName('img1')[0].style.display = 'none'
  			document.getElementsByClassName('img2')[0].style.display = 'block'
  		},3000)
  		setTimeout(function(){
  			document.getElementsByClassName('img2')[0].style.display = 'none'
  			document.getElementsByClassName('img3')[0].style.display = 'block'
  		},6000)
  		setTimeout(function(){
  			document.getElementsByClassName('img3')[0].style.display = 'none'
  			document.getElementsByClassName('mask')[0].style.display = 'none'
  		},9000)
  	},
  	soon(){
  		document.getElementsByClassName('img3')[0].style.display = 'none'
  			document.getElementsByClassName('mask')[0].style.display = 'none'
  		/*clearInterval(this.timer)*/
  	}
  },
  mounted(){
  	this.bootPage()
  }
  
 }
</script>

<style>
  .mask{
  	width: 100%;
  	height: 100%;
  	position: absolute;
  	top: 0;
  	background: white;
  	z-index: 10000;
  	
  }
</style>
