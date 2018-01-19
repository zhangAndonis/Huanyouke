<template lang="html">
  <div class="app-quick-register">
    
    <div class="u62-c">
    	<i class="yo-ico" @click="skip('AppLoginRegister')">&#xe624;</i>
       
        <h1>手机快速注册</h1> 
    </div>
    <div class="main22-c">
        <form>
            <p><input type="text" placeholder="请输入手机号" v-model="registerList.userName" @blur="reUserName()"/><span class="sp1" v-if="isHidden"><i class="yo-ico" >&#xe6a8;</i></span></p>
           <!-- <p><input type="text" placeholder="短信验证码"/><a href="#javascript">获取验证码</a></p>-->
            <p><input type="text" placeholder="昵称 最长15个字符" v-model="registerList.nickName" @blur="reNickName"/><span class="sp1" v-if="isShow"><i class="yo-ico" >&#xe6a8;</i></span></p>
            <p><input type="password" placeholder="设置密码 6-15位数字或字母密码" v-model="registerList.password" @blur="rePassword"/><span class="sp1" v-if="isShowed"><i class="yo-ico" >&#xe6a8;</i></span></p>
            <button @click="register({id:registerList.ids,userName:registerList.userName,password:registerList.password,nickNam:registerList.nickName})">注册完成进入环游客</button>
        </form>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name:'app-quick-register',
  data(){
  	return{
  		registerList:
  			{ids:1,userName:'',password:'',nickName:''}
  		,
  		cd:[],
  		isHidden:false,
  		isShow:false,
  		isShowed :false
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
    register(params){
    	this.cd.push(params)
    	this.registerList.ids ++
    	console.log(this.registerList.userName,999)
    	
    	
    	if(this.registerList.userName != '' && this.registerList.password != ''&&this.registerList.nickName != '' && this.isHidden == false &&this.isShow == false&& this.isShowed == false){
					this.$store.commit('RegisterInfo',this.cd);
					this.$router.push('AppLoginRegister')

				}
				else{					
                MessageBox({
								  title: '注册失败',
								  message: '确定执行此操作?',
								  showCancelButton: true
								}); 	
				}
    },
    reUserName(){
    	var re = /^1[34578]\d{9}$/
    	if(re.test(this.registerList.userName)){
    		   this.isHidden = false
    	}else{
    		   this.isHidden=true
    	}
    },
    reNickName(){
    	var re = /^[\u4e00-\u9fffa-zA-Z]{1,15}$/
    	if(re.test(this.registerList.nickName)){
    		 this.isShow = false
    	}else{
    		this.isShow=true
    	}
    },
    rePassword(){
    	console.log(1)
    	var re = /^[0-9a-z]{6,15}$/
    	if(re.test(this.registerList.password)){
    		this.isShowed = false
    	}else{
    		this.isShowed = true
    	}
    }
  },
  mounted(){
  	
  }
}
</script>

<style lang="scss" scoped>
    .sp1{
    	font-size: 0.12rem;
    	display: inline-block;
    	margin-left: 0.05rem;
    	color: red;
    }
</style>


