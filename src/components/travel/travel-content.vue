<template lang="html">
  
  <div class="app-travel-content ">
      <div class="travel-content">
      	<div class="content-list" @click="skip('traveldetail',views1)">
      		 <img src="../../assets/youji/youji2.png"/>
      		 <div class="title">
      		 	  <h1>初次探访北极圈</h1>
      		 	  <i></i>
      		 	  <p><span>2017.10.1</span><span class="sp1">10天</span><span class="sp2">2075次浏览</span></p>
      		 	  <b>北欧，芬兰</b>
      		 </div>
      		 	
      		 </div>
      		 <div class="content-list" @click="skip('traveldetail',views2)">
      		 <img src="../../assets/youji/youji3.png"/>
      		 <div class="title">
      		 	  <h1>印度洋上寻找绿野仙踪</h1>
      		 	  <i></i>
      		 	  <p><span>2017.5.1</span><span class="sp1">10天</span><span class="sp2">7055次浏览</span></p>
      		 	  <b>泰国，攀牙湾</b>
      		 </div>
      		 	
      		 </div>
      	</div>
      	
        
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'app-travel-content',
  components:{
  
  },
  data(){
  	return{
  		views1:[],
  		views2:[]
  	}
  },
  methods:{
  	skip(name,params){
		 this.$router.push({name})
		 localStorage.views = JSON.stringify(params)
  	},
  	 getData(){
            let that = this  
            axios.get('/api/detail/detaillist').then((response)=>{
                this.views1 = response.data.data.subjects1
                this.views2 = response.data.data.subjects2
                console.log(response,888)
            })	
           
            
      }
  },
  created(){
  	this.getData()
  }
}
</script>

<style lang="scss">

</style>