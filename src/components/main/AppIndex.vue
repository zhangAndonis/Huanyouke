<template lang="html">
  <div class="app-index body">
   <header class="">
      
      <div class="search">
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
  		scroll:''
  	}
  },
  methods:{
    skip(name){
      console.log(name,555)
      this.$router.push({name})
     
    },
    getData(){
    	
            let that = this  
             
            	
            
            axios.get('/api/banner/list').then((response)=>{
            	console.log(response)
               
                 
                 
                 that.billboards = response.data.data.subjects
                 Indicator.close();
            })	
           
            
      },
        scrollfunc(){

          var scroll = document.documentElement.scrollTop || document.body.scrollTop;  
        
//       console.log(scroll);
}

    },
    created(){
        this.getData()
    },
    mounted(){window.addEventListener('scroll',this.scrollfunc,true)
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
