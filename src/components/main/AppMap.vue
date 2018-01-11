  <template lang="html">
  <div class="app-map body ">
   <div class="map-header">
   	<span>取消</span>
   	<span>搜索</span>
   </div>
   <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  
</ul>
<div class="ani elastic-in-left elastic-in-right">该元素将会被应用elastic-in-down动画</div>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name:'app-map',
  methods:{
  	getData(){
            let that = this  
            axios.get('/api/a/alist',{
            	  params:{count:2,current:1}
            }).then((response)=>{
            	console.log(response,666)
                 
              
                 
            })	 
      },
    skip(name){
      this.$router.push({name})
    },
    loadMore() {
  this.loading = true;
  setTimeout(() => {
    console.log(1)
  }, 2500);
}
  },
 created(){
  	this.getData()
  }
}
</script>

<style lang="scss">

</style>