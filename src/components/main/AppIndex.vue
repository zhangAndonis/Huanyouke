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
        <img src="http://gallery.youxiake.com/Public/Data/upload/201711/30/56551512010265.jpg"/>
    </section>
    <nav>
      <ul>
        <li @click="skip('near')">附近</li>
        <li @click="skip('destination')">目的地</li>
        <li @click="skip('hotel')">酒店</li>
        <li @click="skip('food')">美食</li>
        <li @click="skip('map')">地图</li>
      </ul>
    </nav>
    <indexCon/>
    <AppFooter/>
  </div>
</template>

<script>
import indexCon from './content/indexCon'
import AppFooter from './AppFooter.vue'
export default {
  name:'app-index',
  components:{
    indexCon,AppFooter
  },
  methods:{
    skip(name){
      console.log(name,555)
      this.$router.push({name})
     
    }
  }
}
</script>

<style lang="scss">

</style>
