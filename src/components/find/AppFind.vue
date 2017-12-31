<template lang="html">
  
  <div class="app-find ">
      <app-footer ></app-footer>  
      <div class="find-header">
           <h1>发现</h1>
      </div>
      <div class="find-nav">
         <ul>
          <li>查攻略</li>
          <li>写游记</li>
          <li>问大家</li>
          <li>记账单</li>
         </ul>
      </div>
      <div class="find-destioation">
          <div class="find-top">
            <h1>最热旅途</h1>
            <b></b>
            <span>发现最美目的地</span>
          </div>
          <div class="find-con">
              <div class="find-con1"></div>
              <div class="find-con1"></div>
              <div class="find-con1"></div>
          </div>
          <div class="find-title">
            <h1>记录旅途中最美的瞬间</h1>
          </div>
           <div class="find-title">
            <b>点击查看更多详情</b><span>更多</span>
          </div>
           <div class="find-title1">
            <div class="find-left">
              <span>更多</span>
              <h2>旅行随手拍</h2>
            </div> 
            <div class="find-left">
              <span>头像</span>
              <h2>旅行随手拍</h2>
            </div> 
          </div>
          <div class="find-hot">
              <div class="hot-answers">
                <h1>热门回答</h1>
              </div>
               <div class="hot-answers1">
                <h1>有没有人知道厦门有什么地方适合烧烤？</h1>
              </div>
              <div class="hot-answers2">
                <h1>你好，厦门适合野外烧烤的地方有十三陵水库，白羊沟和温榆河边。</h1>
              </div>
              <div class="hot-answers3">
                  <span>8920浏览</span>
                  <b>5回答</b>
              </div>
              <div class="find-more">
                <h1>查看更多</h1>
                <span>更多</span>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import AppFooter from '../main/AppFooter.vue'
export default {
  name:'app-find',
  components:{
    AppFooter
  }
}
</script>

<style lang="scss">

</style>
