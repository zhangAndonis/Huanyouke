  <template lang="html">
  <div class="app-hot-con body ">
    <div class="zhot-con">
       <div class="hot-top">
       	 <h1>热门目的地</h1>
       	 <span>更多<i class="yo-ico">&#xe502;</i></span>
       </div>
       <div class="recommend-con">
       	  <div class="recommend-con-left">
       	  	  <div class="left-con1">
       	  	  	 推荐
       	  	  </div>
       	  	  <h1>塞班缤纷世界，纵情游乐天堂</h1>
       	  	  <b></b>
       	  	  <span>1244点赞</span>
       	  </div>
       	  <div class="recommend-con-right">
       	  	 <img src="../../../assets/hot/hot.png" alt="" />
       	  </div>
       </div>
       <div class="representative-con">
       	  <div class="representative-con1">
       	  	<img src="../../../assets/hot/hot1.png" alt="" /> 
       	  	<span></span>
       	  	<p>澳大利亚</p>
       	  </div>
       	   <div class="representative-con1">
       	  	<img src="../../../assets/hot/hot2.png" alt="" /> 
       	  	<span></span>
       	  	<p>新西兰</p>
       	  </div>
       	   <div class="representative-con1">
       	  	<img src="../../../assets/hot/hot3.png" alt="" /> 
       	  	<span></span>
       	  	<p>马尔代夫</p>
       	  </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-hot-con',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>