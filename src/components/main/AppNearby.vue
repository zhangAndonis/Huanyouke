  <template lang="html">
  <div class="app-near body ">
    <div class="z-top">
    
        <span ><i class="yo-ico" @click="skip('index')">&#xe624;</i></span>
        <img src="../../assets/near/near1.png"/>
    </div>
    <div class="content">
        
           <div class="z-delicacy-top">
               <div class="z-left"><h1>特色美食</h1></div>
               <div class="z-right"><span @click="change">换一换</span></div>
           </div>
       
        <div class="z-delicacy-con" v-if="isShow">
           	<div class="con1" v-for="food in foods" :key="food.id" @click=" skip('detail1',food.detailpath,true)" >
           		 <div class="img">
           		 	 <img :src="food.imgUrl" alt="" />
           		 </div>
           		 <div class="name">
           		 	 {{food.name}}
           		 </div>
           		 <div class="start">
           		 	<div class="left"><img :src="food.start" alt="" /></div>
           		 	<div class="right"><span>{{food.distance}}</span></div>
           		 </div>
           	</div>
           	
         </div>
          <div class="z-delicacy-con" v-if="!isShow">
           	<div class="con1" v-for="food in foodes" :key="food.id" @click=" skip('detail1',food.detailpath,true)" >
           		 <div class="img">
           		 	 <img :src="food.imgUrl" alt="" />
           		 </div>
           		 <div class="name">
           		 	 {{food.title}}
           		 </div>
           		 <div class="start">
           		 	<div class="left"><img :src="food.start" alt="" /></div>
           		 	<div class="right"><span>{{food.distance}}</span></div>
           		 </div>
           	</div>
           	
         </div>
         <div class="z-delicacy-top">
               <div class="z-left"><h1>热门景点</h1></div>
               <div class="z-right"><span>换一换</span></div>
           </div>
       
        <div class="z-delicacy-con">
           	<div class="con1" v-for="view in views" :key="view.id" @click=" skip('detail1',view.imgUrl,false)">
           		 <div class="img">
           		 	 <img :src="view.imgUrl" alt="" />
           		 </div>
           		 <div class="name">
           		 	 {{view.name}}
           		 </div>
           		 <div class="start">
           		 	<div class="left"><img :src="view.start" alt="" /></div>
           		 	<div class="right"><span>{{view.comment}}</span></div>
           		 </div>
           	</div>
           	
         </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'app-near',
  data(){
  	return{
  		foods:[],
  		views:[],
  		foodes:[
  			{id:1,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭',detailpath:"http://p0.meituan.net/deal/b1c3788dffce27e11b400624df298bec57329.jpg",start: "../../src/assets/near/start.png",distance:"10公里"},
  			{id:2,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭'},
  			{id:3,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭'},
  			{id:4,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭'},
  			{id:5,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭'},
  			{id:6,imgUrl:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=197184923,482635201&fm=58',title:'北京烤鸭'}
  		],
  		isShow:true
  	}
  },
  methods:{
    skip(name,img,type){
      localStorage.detil1 = JSON.stringify({img,type})
      this.$router.push({name})
    },
    skip1(name,img){
      localStorage.detil2 = JSON.stringify({img})
      this.$router.push({name})
    },
    change(){
    	this.isShow = ! this.isShow
    },
    getData(){
            let that = this  
            axios.get('/api/near/nearlist').then((response)=>{
                 console.log(response,888)
                 this.foods = response.data.data.subjects1
                 this.views = response.data.data.subjects2
            })	
           
            
      }
  },
  created(){
        this.getData()
       
         
    }
}
</script>

<style lang="scss">

</style>