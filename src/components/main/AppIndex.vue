<template lang="html">
  <div class="app-index body">
   <header class="">
      
      <div class="search" @click="skip('search')">
        <i class="yo-ico">&#xf067</i>
        <input type="text" placeholder="搜索你感兴趣的东西" />
      </div>
    </header>
    <section class="swiper-container">
        
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="banner in billboards" :key="banner.id">
		        	<img width="100%" :src="banner.imgUrl" :title="banner.name" alt="">
		        </div>
		      
		    </div>
		   
		   <div class="swiper-pagination"></div>
    
    

    </section>
    <nav>
      <ul>
        <li @click="skip('near')">
        		<div class="cire cire1"><i class="yo-ico">&#xe604;</i></div>
        		<span>附近</span>
        </li>
        <li @click="skip('destination')">
        	<div class="cire cire2"><i class="yo-ico">&#xe661;</i></div>
        	<span>目的地</span>
        </li>
        <li @click="skip('hotel')">
        	<div class="cire cire3"><i class="yo-ico">&#xe603;</i>	</div>
        	<span>酒店</span>
        </li>
        <li @click="skip('food')">
        	<div class="cire cire4">
        		<i class="yo-ico">&#xe611;</i>
        	</div>
        	
        	<span>美食</span>
        </li>
        <li @click="skip('map')">
        	<div class="cire cire5"><i class="yo-ico">&#xe882;</i></div>
        	<span>地图</span>
        </li>
      </ul>
    </nav>
    <indexCon/>
    <div class="top" v-if="isShow" @click="top()">
      <span></span>
      <i class="yo-ico">&#xe608;</i>
    </div>
    
  </div>
</template>

<script>
import indexCon from './content/indexCon'
import { Indicator } from 'mint-ui';
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name:'app-index',
  components:{
    indexCon
  },
  data(){
  	return{
  		billboards:[],
  		scroll:'',
  		isShow:false,
  		isHiddens:true,
  		
  	}
  },
  methods:{
    skip(name){
			this.$router.push({name})
    },
    getData(){
            let that = this  
            axios.get('/api/banner/list').then((response)=>{
                 that.billboards = response.data.data.subjects
                console.log(response)
            })	
           
            
      },
        scrollfunc(){

          var scroll = document.documentElement.scrollTop || document.body.scrollTop;  
          this.scroll = scroll
         
          
          if(scroll >=200){
          	this.isShow = true
          	
          }else{
          	
          	this.isShow = false
          }
         
},top(){
	document.documentElement.scrollTop = document.body.scrollTop=0
},
loading(){
	 this.timer = setTimeout(function(){
           document.getElementsByClassName('loading')[0].style.display = 'none'
          
       },3000)
	 
}

    },
    created(){
        this.getData()
       
         
    },
    mounted(){
    	window.addEventListener('scroll',this.scrollfunc,true)

    },
    updated () {
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:true,
            pagination:{el:'.swiper-pagination'}
        })
        
       
    }
   
}
</script>

<style lang="scss">
.swiper-container{
	
	.swiper-pagination-bullet-active {
    opacity: 1;
    background: #ffc505;
}
}

</style>
