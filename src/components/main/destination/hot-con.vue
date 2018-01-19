  <template lang="html">
  <div class="app-destination-hot body ">
    <div class="hot-con">
    	<div class="hot-con-top">
    		<h1>热门推荐</h1>
    	</div>
    	<div class="hot-img">
    		<div class="hot-img-con" v-for="hots in billboards">
    			 <img :src="hots.imgUrl" alt="" />
    			 <span></span>
    			 <p>{{hots.name}}</p>
    		</div>
    		
    	</div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name:'app-destination-hot',
  data(){
  	return{
  		billboards:[]
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },
    getData(){
            let that = this  
            axios.get('/api/destination/destinationlist').then((response)=>{
                 that.billboards = response.data.data.subjects
console.log(response)
                
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