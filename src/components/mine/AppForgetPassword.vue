<template>
  <div class="app-forget-password">
    <div class="u23-c">
      
    </div>
    <div class="u63-c">
        <div class="back3">返回</div>   
        <h1>找回密码</h1> 
    </div>
    <form>
        <div class="main23-c">
            <p><input type="text" placeholder="请输入手机号码"/></p> 
            <p><input type="text" placeholder="短信验证码"/><a href="#javascript">获取验证码</a></p> 
            <p><input type="password" placeholder="设置密码 6-15位数字或字母密码"/></p> 
            <button>确定</button> 
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'app-forget-password'
}
</script>

<style lang="scss">

</style>

