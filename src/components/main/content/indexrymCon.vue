  <template lang="html">
  <div class="app-rym-con body ">
    <div class="zrym-con">
       <div class="rym-top">
       	 <h1>旅行者之选</h1>
       	 <span>更多<i class="yo-ico">&#xe502;</i></span>
       </div>
       <div class="rym_content">
       	  <div v-for="rym in billboards" :key="rym.id" class="rym_com_img">
       	  	<div class="con_img">
       	  		<img :src="rym.imgUrl" alt=""/>
       	  	</div>
       	  	<div class="con_name">
       	  		<p>{{rym.name}}</p>
       	  	</div>
       	  	<div class="con_title">
       	  		<span>{{rym.title}}</span>
       	  	</div>
       	  </div>
       </div>
       
    </div>
  </div>
</template>

<script>
import { Lazyload } from 'mint-ui';
import { Toast } from 'mint-ui';
import axios from 'axios'
export default {
  name:'app-rym-con',
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
            axios.get('/api/rym/remlist',{
            	  params:{count:10}
            }).then((response)=>{
            	console.log(response,666)
                 that.billboards = response.data.data.subjects
              
                 
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