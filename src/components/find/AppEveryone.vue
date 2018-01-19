<template lang="html">
  
  <div class="app-everyone ">
    <div class="writer-header">
    	<div class="header-con">
    		<span  @click="skip('find')">上一步</span>
    	  <span  @click="skip('everyonenext')">下一步</span>
    	</div>
    </div>
    <div class="travel-title">
    	<div class="travel-search">
    		<h3>标题:清晰描述你的疑问</h3>
    	  <input type="text" @keyup="ha($event,title)" v-model="title"/>
    	</div>
    	
    </div>
   <div class="travel-msg">
	    <div class="msg-con">
	    	 <b>提示</b>
	    	 <span>1.标题会直接被回答者看到，是他们决定回不回答的重要         标准。描述越清晰完整，越容易收到满意的回答哦~  </span>
	    	 <span> 2.如果有更复杂的问题说明，可以在"下一步"补充</span>
	    	 
	    </div>
   
   </div>
  </div>
</template>

<script>

	import axios from 'axios'
export default {
  name:'app-everyone',
  components:{

  },
  data(){
  	return{
  		billboards:[],
  		scroll:'',
  		title:''
  	}
  },
  methods:{
    skip(name){
      console.log(name,555)
      this.$router.push({name})
     
    },ha(e,params){
		if(e.keyCode==13){
	
	
		  
		  localStorage.wen = JSON.stringify(params)
		
		}
  }
  }
}
</script>

<style lang="scss">
  
</style>