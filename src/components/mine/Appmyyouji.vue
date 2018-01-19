<template lang="html">
  
  <div class="app-mine-you ">
       
      <div class="mine-header z-youheader">
      	<i class="yo-ico back" @click="skip('mine')">&#xe624;</i>
      	 <h1>我的游记</h1>
      	 <span>总篇数{{youji.length}}</span>
      </div>
      <div class="p" v-if="!youji.length">你的游记很空哟</div>
      <div v-for="(msgs,i) in youji" :key="i" v-if="youji.length">
      		<div class="tx ztx">
    	 		<div class="img">
    	 			<img src="../../assets/detail.png" alt="" />
    	 			
    	 		</div>
    	 		<div class="xx">
    	 			<span>1篇游记</span>
    	 			<p>567人浏览</p>
    	 		</div>
    	 </div>
    	 <div class="youimg">
    	 	<img src="http://oocct.oss-cn-hangzhou.aliyuncs.com/oocct/maldives/wuxing/ku-la-ma-ti/ku-6.jpg" alt="" />
    	 </div>
      	<div class="youtitle">
      		<p>标题:<span>{{msgs.title}}</span></p>
      	</div>
        <div class="you-content">
        内容：{{msgs.content}}
        </div>
      </div>
       
  </div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
export default {
  name:'app-mine-you',
  components:{
   
  },
  data(){
  	return{
  		isShow:JSON.parse(localStorage.user_info?localStorage.user_info:'[]'),
  		youji:JSON.parse(localStorage.msg?localStorage.msg:'[]')
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
    exited(){

  		  MessageBox({
						 
						  message: '确定要退出登录吗?',
						  showCancelButton: true
						});
						var that = this
  	document.getElementsByClassName('mint-msgbox-confirm')[0].onclick = function(){
  	
    localStorage.removeItem('user_info')
    that.isShow = []
    that.user_info=[]
  	}
    },
    hehe(){
    	alert('hehe')
    }
  },
  mounted(){
  	var users= JSON.parse(localStorage.user_info?localStorage.user_info:'[]')
  	users.forEach((item,i)=>{
  		  this.user_info = item
  	})
  }
}
</script>

<style lang="scss">
	.z-youheader{
		position: absolute;
		width: 100%;
		z-index: 1000;
		top: 0;
		i{
			
			margin-left: -1rem;
			color: white;
			
		}
		span{
			font-size: 0.12rem;
			color: white;
		}
		h1{
			width: 1.5rem;
			text-align: center;
			margin-left: 0.4rem;
		}
	}
	.p{
		width: 2.7rem;
		height: 2.7rem;
		text-align: center;
		line-height: 2.7rem;
		margin: 0 auto;
		font-size: 0.2rem;
		color: #FFC505;
	}
.ztx{
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 0.54rem;
	
	.img{
		
		width: 0.5rem;
		height: 0.5rem;
		margin-left: 0.15rem;
		margin-right: 0.05rem;
		img{
				width: 0.5rem;
		   height: 0.5rem;
		}
	}
}
.youimg{
	width: 2.7rem;
	height:2.7rem;
	margin: 0.1rem auto;
	img{
		width: 2.7rem;
	height:2.7rem;
	}
}
.youtitle{
	margin-left: 0.15rem;
}
.you-content{
	margin-left: 0.15rem;
}
</style>
