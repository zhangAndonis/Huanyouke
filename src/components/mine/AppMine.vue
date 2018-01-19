<template lang="html">
  
  <div class="app-mine ">
       
      <div class="mine-header">
      	 <h1>个人中心</h1>
      	
      </div>
      <div class="mine-login">
      	<span ><img src="../../assets/mine/mine1.png" alt="" /></span>
      	<p><b @click="skip('AppLoginRegister')" v-if="!isShow.length">登录/</b><b @click="skip('AppQuickRegister')"v-if="!isShow.length">注册</b>
      		
      		<b @click="hehe">{{user_info.nickNam}}</b>
      	</p>
      </div>
      <div class="mine-nav">
      	<ul>
           <li @click="skip('myyouji')">
           	<img src="../../assets/find/mine2.png" alt="" />
           	<span >我的游记</span>
           	</li>
             <li>
           	<img src="../../assets/find/mine3.png" alt="" />
           	<span>我的收藏</span>
           	</li>
           	 <li>
           	<img src="../../assets/find/mine4.png" alt="" />
           	<span>我的点评</span>
           	</li>
           	 <li @click="skip('question')">
           	<img src="../../assets/find/mine5.png" alt="" />
           	<span>我的问答</span>
           	</li>
           
         </ul>
      </div>
      <div class="mine-con">
      	<ul>
      		<li @click="exited">评价APP<i class="yo-ico">&#xe502;</i></li>
	      	<li>关于我们<i class="yo-ico">&#xe502;</i></li>
	      	<li>意见反馈<i class="yo-ico">&#xe502;</i></li>
	      	<li class="exit" @click="exited" v-if="isShow.length">退出当前账号</li>
	      	 
	      </ul>
      	
      </div>
  </div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
export default {
  name:'app-mine',
  components:{
   
  },
  data(){
  	return{
  		isShow:JSON.parse(localStorage.user_info?localStorage.user_info:'[]'),
  		user_info:[]
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

</style>
