<template lang="html">
  
  <div class="app-travel-write-next ">
      <div class="everyonenext-header">
    	<div class="header-con">
    		<span  @click="skip('writetravel')">上一步</span>
    	  <span @click="save({title:titles,content:content})">发表</span>
    	</div>
    </div>
    <div class="ztravel-title">
    	<div class="travel-search">

    	 
    		<h3>标题 <span>{{titles}}</span></h3>

    	</div>
    	
    </div>
   <div class="ztravel-msg">
	    <div class="msg-con">
	    	<div class="msg-title">
	    		<span>（选填）写下关于问题的详细描述</span>
	    		<textarea name="" rows="" cols="" v-model="content"></textarea>
	    	</div>
	    	 <div class="msg-img">
	    	 	<img src="http://oocct.oss-cn-hangzhou.aliyuncs.com/oocct/maldives/wuxing/ku-la-ma-ti/ku-6.jpg" alt="" />
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
  name:'app-travel-write-next',
  components:{

  },
  data(){
  	return{
  		billboards:[],
  		scroll:'',
  		value:false,
  		titles:JSON.parse(localStorage.you?localStorage.you:''),
  		content:'',
  		cd:JSON.parse(localStorage.msg?localStorage.msg:'[]'),
  	}
  },
  methods:{
    skip(name){
      console.log(name,555)
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
    localStorage.msg = JSON.stringify(that.cd)
   
  	}
    	
    	
    }
  }
}
</script>

<style lang="scss">
  
</style>