  <template lang="html">
  <div class="app-hot-con body ">
    <div class="zhot-con">
       <div class="hot-top">
       	 <h1>热门目的地</h1>
       	 <span @click="skip('more')">更多<i class="yo-ico">&#xe502;</i></span>
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
       	  <div class="recommend-con-right" @click="skip('detail2')">
       	  	 <img src="../../../assets/hot/hot.png" alt="" />
       	  </div>
       </div>
       <div class="representative-con">
       	  <div class="representative-con1" @click="skip('detail2')">
       	  	<img src="../../../assets/hot/hot1.png" alt="" /> 
       	  	<span></span>
       	  	<p>澳大利亚</p>
       	  </div>
       	   <div class="representative-con1" @click="skip('detail2')">
       	  	<img src="../../../assets/hot/hot2.png" alt="" /> 
       	  	<span></span>
       	  	<p>新西兰</p>
       	  </div>
       	   <div class="representative-con1" @click="skip('detail2')">
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
  data(){
  	return{
  		hotlist:[
  			{id:1,imgPath:'../../../assets/hot/586b90c6dc36f.jpg',imagePath:[
  				{imgUrl:'../../../assets/hot/586b90c6dc36f.jpg'},
  				{imgUrl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440'},
  				{imgUrl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201707/04/595b01fab1521.jpg?imageView2/0/h/440'},
  				{imgUrl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201704/12/58edeb12ada27.jpg?imageView2/0/h/440'},
  				{imgUrl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201612/28/586337e0622bf.jpg?imageView2/0/h/440'},
  				{imgUrl:'http://gallery.youxiake.com/Public/Data/upload/productimg/201711/10/5a053da9d9650.jpg?imageView2/0/h/440'}
  			]}
  		]
  	}
  },
  methods:{
    skip(name){
    	
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>