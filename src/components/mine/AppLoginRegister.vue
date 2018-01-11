<template lang="html">
  <div class="app-login-register">
    <div class="u2-c">
      
    </div>
    <div class="u6-c">
        <div class="back" @click="skip('mine')">返回</div>   
        <h1>环游客欢迎您</h1> 
    </div>
    <div class="main-c">
        <div class="message-c">
            <p @click="skip('AppLoginRegister')">账号登录</p>
            <p @click="skip('AppNode')">短信验证码登录</p>
        </div>
        <form>
            <p>账号 <input type="text" placeholder="手机号/注册邮箱"/></p>
            <p>密码 <input type="password"/> <button>隐藏/显示密码</button></p>
            <p><span @click="skip('AppQuickRegister')">快速注册</span> <span @click="skip('AppForgetPassword')">忘记密码？</span></p>
            <button class="login-c">登录</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-login-register',
  components:{

  },
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


