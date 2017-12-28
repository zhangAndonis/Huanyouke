<template lang="html">
  <div class="app-index body ">
    <header class="app-box">
      <div class="logo">
          <h1>logo</h1>
          <span>环游客</span>
      </div>
      <div class="search">
        <i class="yo-ico">&#xf067</i>
        <input type="text" placeholder="搜索旅行地/酒店/景点" />
      </div>
    </header>
    <section >
        <h1>轮播图</h1>
    </section>
    <nav>
      <ul>
        <li>附近</li>
        <li>目的地</li>
        <li>酒店</li>
        <li>美食</li>
        <li>地图</li>
      </ul>
    </nav>
    <div class="list">
  
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>

    </div>
    <div class="footer">
         <ul>
           
            <li @click="skip('index')">
               <i class="yo-ico">&#xe62b;</i>
               <span>首页</span>
              
            </li>
            <li @click="skip('find')">
               <i class="yo-ico">&#xe608;</i>
               <span>发现</span>
            </li>
            <li @click="skip('index')">
               <i class="yo-ico">&#xe614;</i>
               <span>游记</span>
            </li>
            <li @click="skip('index')">
               <i class="yo-ico">&#xe604;</i>
               <span>我的</span>
            </li>
         </ul>
    </div>
  </div>
</template>

<script>
// import router from './router'
export default {
  name:'app-index',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>
