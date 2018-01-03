<template lang="html">
  
  <div class="app-mine ">
      <app-footer ></app-footer>  
      <div class="mine-header">
      	 <h1>个人中心</h1>
      </div>
      <div class="mine-login">
      	<span @click="skip('AppLoginRegister')"></span>
      	<p><b @click="skip('AppLoginRegister')">登录</b>/<b @click="skip('AppLoginRegister')">注册</b></p>
      </div>
      <div class="mine-nav">
      	<ul>
	        <li>我的收藏</li>
	        <li>我的游记</li>
	        <li>我的问答</li>
	        <li>我的点评</li>
        </ul>
      </div>
      <div class="mine-con">
      	<ul>
      		<li>评价APP</li>
	      	<li>关于我们</li>
	      	<li>意见反馈</li>
	      </ul>
      	
      </div>
  </div>
</template>

<script>
import AppFooter from '../main/AppFooter.vue'
export default {
  name:'app-mine',
  components:{
    AppFooter
  },
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>
