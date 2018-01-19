<template lang="html">
  <div class="app-login-register">
    <div class="u2-c">
      
    </div>
    <div class="u6-c">
       <i class="yo-ico" @click="skip('mine')">&#xe624;</i>
        <h1>环游客欢迎您</h1> 
    </div>
    <div class="main-c">
        <div class="message-c">
            <p @click="skip('AppLoginRegister')">账号登录</p>
            <p >短信验证码登录</p>
        </div>
        <form>
        	
            <p><i class="yo-ico">&#xe65e;</i> <input type="text" placeholder="手机号" @blur="he" v-model="userList.userName"/><span class="sp1" v-if="isShow"><i class="yo-ico" >&#xe6a8;</i></span></p>
            <p><i class="yo-ico">&#xe603;</i> <input type="text" @blur="en" placeholder="密码不少于6位" v-model="userList.password" v-if="isHidden"/><input type="password"  @blur="en"placeholder="密码不少于6位" v-model="userList.password" v-if="!isHidden"/><i class="yo-ico hidden" @click="ha" v-if="isHidden">&#xe625;</i><i class="yo-ico hidden" @click="ha" v-if="!isHidden">&#xe6b1;</i></p>
            <p><span @click="skip('AppQuickRegister')">快速注册</span> <span @click="skip('AppForgetPassword')">忘记密码？</span></p>
            <button class="login-c" @click="login({userName:userList.userName,password:userList.password})">登录</button>
        </form>
    </div>
   
  </div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
		import {mapState} from 'vuex'
	import { Switch } from 'mint-ui';
export default {
  name:'app-login-register',
  components:{

  },
  data(){
  	return{
  		value:true,
  		userList:
  		    {userName:'',password:''},
  	
  		isShow:false,
  		isHidden:true
  			
  		
  		
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
    ha(){
    	this.isHidden = !this.isHidden
    },
    en(){
    	
    	var re = /^[0-9a-z]{6,15}$/
    	if(re.test(this.userList.password)){
    		this.isShowed = false
    	}else{
    		this.isShowed = true
    	}
    },
    he(){
    	console.log(this.userList.userName)
    	var re = /^1[34578]\d{9}$/
    	if(re.test(this.userList.userName)){
    		this.$router.push('mine')
    	}
    	else{
    		this.isShow = true
    	}
    },
    login(params){
    	
    	var user_info = JSON.parse(localStorage.user_info?localStorage.user_info:'[]')
console.log(params,user_info,99)
    		  if(user_info.userName == params.userName && user_info.password == params.password && userList.userName != "" && userList.password!=""){
    		  	this.$router.push('mine')
    		  }else{
    		  	MessageBox({
						  title: '登录失败',
						  message: '确定执行此操作?',
						  showCancelButton: true
						});
    		  }

    }
  }
}
</script>

<style lang="scss" scoped>
#switch-on{
	margin-left: 0.05rem;
}
</style>


