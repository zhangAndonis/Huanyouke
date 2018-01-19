<template lang="html">
  
  <div class="app-detail ">
  	<div class="detail_img">
  		<img :src="detail.img" alt=""/>
  		<i class="yo-ico" @click="skip('near')">&#xe6fb;</i>
  	</div>
    <div class="detail_tile">
    	<div class="tetail_wx">
    		<span class="sp1">五星级</span><span class="sp2">（71条评论）</span>
    	</div>
    	<div class="tetail_type">
    		<span v-if="detail.type">日式料理</span><span v-else>公园植物园</span>
    	</div>
    </div>
    <div class="detail_message">
    	<p>台场海滨公园是个拥有海滨沙滩和海岸的公园。它融合了大海和绿色的自然和彩虹桥，富士电视台以及都市型观光旅馆等未来景观。它不仅是日本屈指可数的旅游景点，也是不断继续发展的临海副都心区域的中心。台场海滨公园作为修学旅行或国内外游客的慕名而来的景点</p>
    </div>
    <div class="detail_msg">
    	<p>地址：<span>东京都港区台场1-4-1</span></p>
      <p>到达方式：<span>搭乘电车百合海鸥号至台场海滨公园站下车，步行即到,也可由彩虹大桥步行至公园内</span></p>
      <p>开放时间：<span>全天开放</span></p>
      <p>门票：<span>全天开放</span></p>
      <p>电话：<span>+81-03-5500 5672</span></p>
    </div>
    <div class="detail_food">
    	 <div class="dp">
    	 	 <span>点评</span>
    	 	 <p>2017-11-19</p>
    	 </div>
    	 <div class="tx">
    	 		<div class="img">
    	 			<img src="../../../assets/detail.png" alt="" />
    	 			
    	 		</div>
    	 		<div class="xx">
    	 			<span>鹿晗</span>
    	 			<p>星际评价:<span>五星级</span></p>
    	 		</div>
    	 		
    	 </div>
    	 <div class="ps">
    	 			<p>台场，是日本人靠垃圾填海造起来的，当然这个建在台场的海滨公园也是人工修建的。在这里可以饱览东京湾的美景，眺望彩虹大桥，漫步沙滩，沿着步道可以走到自由女神像这里。海上观光的游</p>
    	 		</div>
    </div>
   
  
  </div>
</template>

<script>
export default {
  name:'app-detail',
  components:{
   
  },
  data(){
  	return{
  		detail:localStorage.detil1?JSON.parse(localStorage.detil1):[]
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
    hd(){
    	this.detail = JSON.parse(localStorage.detil1)
    },
     scrollfunc(){

        
         
}
  },
    

   
    mounted(){
    	  var scroll = document.documentElement.scrollTop || document.body.scrollTop;  
    	 console.log(document.getElementsByClassName('app-detail')[0].scrollTop)
//      console.log(document.documentElement.scrollTop,document.body.scrollTop)
//       	document.body.scrollTop=document.documentElement.scrollTop =0
         document.getElementsByClassName('app-detail')[0].scrollTop = 0
    	
    }
}
</script>

<style lang="scss">

</style>
