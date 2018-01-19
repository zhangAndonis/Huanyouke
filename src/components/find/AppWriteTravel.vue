<template lang="html">
  
  <div class="app-travel-write ">
    <div class="writer-header">
    	<div class="header-con">
    		 <i class="yo-ico" @click="skip('find')">&#xe624;</i>
    	  <span @click="skip('writetravelnext')">下一步</span>
    	</div>
    </div>
    <div class="travel-title">
    	<div class="travel-search">
    		<h3>请输入你的游记标题</h3>
    	  <input type="text" placeholder="可输入48个文字" v-model="title" @keyup="ha($event,title)"/>
    	</div>
    	
    </div>
   <div class="travel-msg">
	    <div class="msg-con">
	    	 <b>提示</b>
	    	 <span>1.好的游记标题可以给你带来更多阅读哦。</span>
	    	 <span> 2.标题也可以在写游记的过程中进行编辑。</span>
	    	 <span> 3.设置好标题请点击“下一步”来添加内容。</span>
	    </div>
   
   </div>
  </div>
</template>

<script>

	import axios from 'axios'
export default {
  name:'app-travel-write',
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
     
    },
     ha(e,params){
		if(e.keyCode==13){
	
	
		  
		  localStorage.you = JSON.stringify(params)
		
		}
  }
 }
}
</script>

<style lang="scss">
  
</style>