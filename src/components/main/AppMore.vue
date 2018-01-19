  <template lang="html">
  <div class="app-more ">
      <div class="more-heade">
      	 <i class="yo-ico" @click="skip('index')">&#xe624;</i>
      	 <p> 精选折扣</p> 
      </div>
      <div class="more-con">
      	  <div class="more-conent" v-for="more in mores" :key="more.id">
      	  	<div class="img">
      	  		<img :src="more.imgUrl"/>
      	  	</div>
      	  	<div class="title">
      	  		{{more.title}}
      	  	</div>
      	  </div>
      	  
      	 
      	  
      </div>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name:'app-mor',
  data(){
  	return{
  		mores:[]
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
     getData(){
            let that = this  
            axios.get('/api/more/morelist').then((response)=>{
                 this.mores = response.data.data.subjects
                console.log(response,999)
            })	
           
            
      }
  },
  created(){
  	this.getData()
  }
}
</script>

<style lang="scss">
.more-heade{
	width: 100%;
	height: 0.44rem;
	background: #FFC505;
	align-items: center;
	font-size: 0.16rem;
	color: white;
	position: absolute;
	display: flex;
	justify-content: space-around;
	top: 0;
	i{
		
	}
	p{
		width: 2.7rem;
		text-align: center;
	}
}
.more-con{
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 0.54rem;
	flex-wrap: wrap;
	align-items: center;
	.more-conent{
		width:1.4rem;
		height:1.5rem;
		
		.img{
			width: 1.4rem;
			height: 1.1rem;
			
			img{
				width: 1.4rem;
			 height: 1.1rem;
			}
		}
		.title{
			idth: 1.4rem;
			height:0.4rem;
		
				font-size: 0.12rem;
			
		}
	}
}
</style>