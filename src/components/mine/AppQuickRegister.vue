<template lang="html">
  <div class="app-quick-register">
    <div class="u22-c">
      
    </div>
    <div class="u62-c">
        <div class="back2" @click="skip('AppLoginRegister')">返回</div>   
        <h1>手机快速注册</h1> 
    </div>
    <div class="main22-c">
        <form>
            <p><input type="text" placeholder="请输入手机号"/></p>
            <p><input type="text" placeholder="短信验证码"/><a href="#javascript">获取验证码</a></p>
            <p><input type="text" placeholder="昵称 最长15个字符"/></p>
            <p><input type="password" placeholder="设置密码 6-15位数字或字母密码"/></p>
            <button>注册完成，进入环游客</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-quick-register',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


