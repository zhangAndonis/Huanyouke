<template lang="html">
  
  <div class="app-find ">
      <!--<app-footer ></app-footer>-->  
      <div class="find-header">
           <h1>社区</h1>
      </div>
      <div class="find-nav">
          <ul>
           <li>
           	<img src="../../assets/find/find1.png" alt="" />
           	<span>查攻略</span>
           	</li>
             <li>
           	<img src="../../assets/find/find2.png" alt="" />
           	<span>写游记</span>
           	</li>
           	 <li>
           	<img src="../../assets/find/find3.png" alt="" />
           	<span>问大家</span>
           	</li>
           	 <li>
           	<img src="../../assets/find/find4.png" alt="" />
           	<span>记账单</span>
           	</li>
           
         </ul>
      </div>
      <div class="find-destioation">
          <div class="find-top">
            <h1>最热旅途</h1>
            <b></b>
            <span>发现最美目的地</span>
          </div>
          <div class="find-con">
              <div class="find-con1">
              	<img src="../../assets/find/find5.png" alt="" />
              </div>
              <div class="find-con1">
              	<img src="../../assets/find/find6.png" alt="" />
              </div>
              <div class="find-con2">
              	<img src="../../assets/find/find7.png" alt="" />
              	<img src="../../assets/find/find8.png" alt="" />
              	<img src="../../assets/find/find9.png" alt="" />
              	<img src="../../assets/find/find10.png" alt="" />
              </div>
          </div>
          <div class="find-title">
            <h1>记录旅途中最美的瞬间</h1>
          </div>
           <div class="find-title">
            <b>点击查看更多详情</b><i class="yo-ico">&#xe502;</i><i class="yo-ico">&#xe502;</i>
          </div>
           <div class="find-title1">
            <div class="find-left">
              <span><img src="../../assets/find/find11.png"/></span>
              <p>旅行随手拍</p>
            </div> 
            <div class="find-left">
              <span><img src="../../assets/find/find12.png"/></span>
              <p>2086人已经参与</p>
            </div> 
          </div>
          <div class="find-hot">
              <div class="hot-answers">
                <h1>热门回答</h1>
              </div>
              <div class="head_portrait">
              <img src="../../assets/find/find13.png"/><span>马可波罗</span>
              </div>
               <div class="hot-answers1">
                <h1>问：有没有人知道厦门有什么地方适合烧烤？</h1>
              </div>
              <div class="hot-answers2">
                <span>你好，厦门适合野外烧烤的地方有十三陵水库，白羊沟和温榆河边。</span>
              </div>
              <div class="hot-answers3">
                  <span>8920浏览</span>
                  <b>5回答</b>
              </div>
              <div class="find-more">
                <h1>查看更多</h1>
                <span><i class="yo-ico">&#xe502;</i></span>
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
