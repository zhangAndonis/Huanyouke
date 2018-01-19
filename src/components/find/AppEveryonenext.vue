<template lang="html">
  
  <div class="app-everyonenext ">
    <div class="everyonenext-header">
    	<div class="header-con">
    		<span  @click="skip('everyone')">上一步</span>
    	  <span @click="save({title:title,content:content})">发表问题</span>
    	</div>
    </div>
    <div class="ztravel-title">
    	<div class="travel-search">
    		<h3>{{title}}</h3>
    	  
    	</div>
    	
    </div>
   <div class="ztravel-msg">
	    <div class="msg-con">
	    	<div class="msg-title">
	    		<span>（选填）写下关于问题的详细描述</span>
	    		<textarea name="" rows="" cols="" v-model="content"></textarea>
	    	</div>
	    	 <div class="msg-img">
	    	 	 
	    	 	
	    	 	 <img src="../../assets/search/160x120 (56).jpg" alt="" />
	    	 </div>
	    </div>
   
   </div>
   <div class="commit">
   	 <div class="commit-con">
   	 	 <span>匿名提问</span>
   	 	 <mt-switch v-model="value" @change="" id="switch-on"></mt-switch>
   	 </div>
   </div>
  </div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
import { Switch } from 'mint-ui';
	import axios from 'axios'
export default {
  name:'app-everyonenext',
  components:{

  },
  data(){
  	return{
  		billboards:[],
  		scroll:'',
  		value:true,
  		title:JSON.parse(localStorage.wen?localStorage.wen:'[]'),
  		content:'',
  		cd:JSON.parse(localStorage.question?localStorage.question:'[]')
  	}
  },
  methods:{
    skip(name){
    
      this.$router.push({name})
     
    },
     save(params){
    	 MessageBox({
						 
						  message: '确定要发表吗?',
						  showCancelButton: true
						});
										var that = this
  	document.getElementsByClassName('mint-msgbox-confirm')[0].onclick = function(){
  	that.cd.push(params)
    localStorage.question = JSON.stringify(that.cd)
   
  	}
    	
    	
    }
  }
}
</script>

<style lang="scss">
  
</style>