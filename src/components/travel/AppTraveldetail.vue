<template lang="html">
  
  <div class="app-travel-detail travel-body">
   
      <div class="travel-header">
      	<div class="travel_top">
      		<i class="yo-ico back" @click="skip('travel')">&#xe624;</i>
      		<h1>我的足迹</h1>
      	
      	</div>
      	  
      </div>
      <div v-for="v in view" :key="v.id" class="z-d">
      	<div class="picbox"><img :src="v.imgUrl" data-url="http://gallery.youxiake.com/Public/Data/upload/productimg/201709/20/59c26076a036b.jpg?imageView2/0/h/440" alt="" class="pic"><div class="extra"><span>深度游</span><span class="separator">|</span><span>{{v.title}}</span></div><div class="price"><div class="price-now">{{v.price}}</div><div class="date">{{v.day}}</div></div></div>
     <div class="item-bottom"><h5>{{v.name}}</h5><p class="describe"><i class="icon">深度游</i>{{v.type}}</p></div>
      </div>
       
  </div>
</template>

<script>
import axios from 'axios'
import AppTravelBanner from './travel-banner.vue'
import AppTravelcontent from './travel-content.vue'
export default {
  name:'app-travel-detail',
  components:{
  AppTravelBanner,AppTravelcontent
  },
  data(){
  	return{
  		billboards:[],
  		scroll:'',
  		view:JSON.parse(localStorage.views?localStorage.views:'[]')
  	}
  },
  methods:{
  	skip(name){
  		this.$router.push({name})
  	}
  },
  created(){
//	this.getData()
  }
  }
</script>

<style lang="scss">
	.back{
		position: absolute;
		left: 0.1rem;
	}
	.z-d{
		margin-top: 0.44rem;
	}
.picbox {
    height: 2.11rem;
        position: relative;
    
    overflow: hidden;
    img{
    	width: 100%;
    	height:100%;
    }
    
}
.extra {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    background: rgba(120, 120, 120, 0.5);
    color: #fff;
    height: 0.2rem;
    line-height: 0.22rem;
    font-size: 0.12rem;
    border-radius: 0.12rem;
    padding: 0 0.1rem;
}
.price {
    position: absolute;
    right: 15px;
    bottom: 20px;
    text-align: center;
    font-size: 0.12rem;
}
.price .price-now {
    background: #ffc31a;
    color: #fff;
    line-height: 0.15rem;
    padding: 0 0.8em;
}
.price .date {
    background: #fdfdfd;
    color: #ffc31a;
    line-height: 0.14rem;
}
.item-bottom {
    padding: 8px;
    width: 100%;
    height: 0.51rem;
    
     h5 {
    color: #333;
    font-size: 0.14rem;
   
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 0px;
}
}
.describe {
    color: #999;
    font-size: 0.12rem;
   
    margin-top: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 10px;
}

</style>