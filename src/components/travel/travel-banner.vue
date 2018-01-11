<template lang="html">
  
  <div class="app-travel-banner ">
      <div class="travel-banner">
      	<div class="banner-con swiper-container">
      		<div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="banner in billboards" :key="banner.id">
		        	<img width="100%" :src="banner.imgUrl" :title="banner.name" alt="">
		        </div>
		      
		    </div>
		   
		   <div class="swiper-pagination"></div>
      	</div>
      </div>
  </div>
</template>

<script>
	import Swiper from 'swiper'
	import axios from 'axios'
export default {
  name:'app-travel-banner',
  components:{

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
             
            	
            
            axios.get('/api/youjilist/youjilist').then((response)=>{
            	console.log(response,777)
               
                 
                 
                 that.billboards = response.data.data.subjects
                 
            })	
           
            
      }
  },
  created(){
  	this.getData()
  },updated () {
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
   	 margin-top: -0.1rem;
   }
   .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
   	bottom:-0.03rem!important;  
   	z-index: 10000; }
   	.swiper-pagination-bullet-active {
    opacity: 1;
    background: #ffc505;
   
}
</style>