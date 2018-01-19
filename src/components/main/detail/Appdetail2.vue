<template lang="html">
  <div class="app-detail ">
    <div class="z-banner">
    	 <i class="yo-ico" @click="skip('index')">&#xe624;</i>
                        <img src="../../../assets/hot/586b90c6dc36f.jpg" width="100%" alt="出境海岛">
     </div>
     <p class="hot-detail">热门推荐</p>
    
  
     
  
    	 <div class="picbox"><img src="../../../assets/hot/59c26076a036b.jpg" data-url="http://gallery.youxiake.com/Public/Data/upload/productimg/201709/20/59c26076a036b.jpg?imageView2/0/h/440" alt="" class="pic"><div class="extra"><span>深度游</span><span class="separator">|</span><span>曼谷素万那普机场集合</span></div><div class="price"><div class="price-now">￥2580起</div><div class="date">5天</div></div></div>
     <div class="item-bottom"><h5>【斯里兰卡全景】2018锡兰环线，尼甘布-康提-雅拉-美瑞莎-科伦坡，一路向“锡”游猎观鲸9日极致深度之旅</h5><p class="describe"><i class="icon">深度游</i>探秘古老钓鱼方式立钓Stilt Fisherman，徒步“世界尽头”霍顿平原，游猎雅拉国家公园，美瑞莎观鲸，最美高山火车与《千与千寻》海上火车双重体验，带你领略极致斯里兰卡。</p></div>
    <div class="picbox"><img src="../../../assets/hot/58c6a0b784e96.jpg" data-url="http://gallery.youxiake.com/Public/Data/upload/productimg/201709/20/59c26076a036b.jpg?imageView2/0/h/440" alt="" class="pic"><div class="extra"><span>深度游</span><span class="separator">|</span><span>曼谷素万那普机场集合</span></div><div class="price"><div class="price-now">￥2580起</div><div class="date">5天</div></div></div>
     <div class="item-bottom"><h5>【斯里兰卡全景】2018锡兰环线，尼甘布-康提-雅拉-美瑞莎-科伦坡，一路向“锡”游猎观鲸9日极致深度之旅</h5><p class="describe"><i class="icon">深度游</i>探秘古老钓鱼方式立钓Stilt Fisherman，徒步“世界尽头”霍顿平原，游猎雅拉国家公园，美瑞莎观鲸，最美高山火车与《千与千寻》海上火车双重体验，带你领略极致斯里兰卡。</p></div>
      <div class="picbox"><img src="../../../assets/hot/595b01fab1521.jpg" data-url="http://gallery.youxiake.com/Public/Data/upload/productimg/201709/20/59c26076a036b.jpg?imageView2/0/h/440" alt="" class="pic"><div class="extra"><span>深度游</span><span class="separator">|</span><span>曼谷素万那普机场集合</span></div><div class="price"><div class="price-now">￥2580起</div><div class="date">5天</div></div></div>
     <div class="item-bottom"><h5>【斯里兰卡全景】2018锡兰环线，尼甘布-康提-雅拉-美瑞莎-科伦坡，一路向“锡”游猎观鲸9日极致深度之旅</h5><p class="describe"><i class="icon">深度游</i>探秘古老钓鱼方式立钓Stilt Fisherman，徒步“世界尽头”霍顿平原，游猎雅拉国家公园，美瑞莎观鲸，最美高山火车与《千与千寻》海上火车双重体验，带你领略极致斯里兰卡。</p></div>
      <div class="picbox"><img src="../../../assets/hot/58edeb12ada27.jpg" data-url="http://gallery.youxiake.com/Public/Data/upload/productimg/201709/20/59c26076a036b.jpg?imageView2/0/h/440" alt="" class="pic"><div class="extra"><span>深度游</span><span class="separator">|</span><span>曼谷素万那普机场集合</span></div><div class="price"><div class="price-now">￥2580起</div><div class="date">5天</div></div></div>
     <div class="item-bottom"><h5>【斯里兰卡全景】2018锡兰环线，尼甘布-康提-雅拉-美瑞莎-科伦坡，一路向“锡”游猎观鲸9日极致深度之旅</h5><p class="describe"><i class="icon">深度游</i>探秘古老钓鱼方式立钓Stilt Fisherman，徒步“世界尽头”霍顿平原，游猎雅拉国家公园，美瑞莎观鲸，最美高山火车与《千与千寻》海上火车双重体验，带你领略极致斯里兰卡。</p></div>
     
   
    
      
  </div>
</template>

<script>
export default {
  name:'app-detail',
 
  components:{
   
  },
  data(){
  	return{
  		details:JSON.parse(localStorage.detail3?localStorage.detail3:'[]'),
  		thems:JSON.parse(localStorage.head?localStorage.head:'[]'),
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
	.zhb{
		width: 100%;
		margin-bottom: 0.2rem;
	}
		.z-banner{
			width: 100%;
			height: 2rem;
			position: relative;
			i{
				position: absolute;
				font-size: 0.2rem;
			}
			img{
				width: 100%;
			height: 2rem;
			}
		}
		.hot-detail{
			width: 100%;
			height: 0.3rem;
			font-size: 0.18rem;
			line-height: 0.3rem;
			color: #FFC505;
		}
	.picbox {
    height: 2.11rem;
        position: relative;
    
    overflow: hidden;
    img{
    	width: 100%;
    	height:100%;
    }
    
}
.extra {
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    background: rgba(120, 120, 120, 0.5);
    color: #fff;
    height: 0.2rem;
    line-height: 0.22rem;
    font-size: 0.12rem;
    border-radius: 0.12rem;
    padding: 0 0.1rem;
}
.price {
    position: absolute;
    right: 15px;
    bottom: 20px;
    text-align: center;
    font-size: 0.12rem;
}
.price .price-now {
    background: #ffc31a;
    color: #fff;
    line-height: 0.15rem;
    padding: 0 0.8em;
}
.price .date {
    background: #fdfdfd;
    color: #ffc31a;
    line-height: 0.14rem;
}
.item-bottom {
    padding: 8px;
    width: 100%;
    height: 0.51rem;
    
     h5 {
    color: #333;
    font-size: 0.14rem;
   
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 0px;
}
}
.describe {
    color: #999;
    font-size: 0.12rem;
   
    margin-top: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 10px;
}
.icon {
    background: #f68b6e;
    color: #fff;
    padding: 2px 5px;
    font-style: normal;
    display: inline-block;
    margin-right: 3px;
}
</style>
