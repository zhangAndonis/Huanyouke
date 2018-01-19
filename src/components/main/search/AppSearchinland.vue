  <template lang="html">
  <div class="app-search-inland body ">
   <div class="inland">
    		
    		<p>国内热门<span><img src="../../../assets/search/search2.png" alt="" /></span></p>
    		<ul>
    			<li v-for="(inlands,i) in inland" :key="i" @click="add({title:inlands.title},inlands.imgUrl,inlands.title)">{{inlands.title}}</li>
    			
    			
    			
    		</ul>
    	</div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'app-search-inland',
  data(){
  	return{
  		searchs:
  		{
  			id:1,title:''
  		},
  		cd:JSON.parse(localStorage.history?localStorage.history:'[]'),
  		history:JSON.parse(localStorage.history?localStorage.history:'[]'),
  		 inland:[
  		    
  		  ],
  		  international:[
  		    {title:'日本'},
  		    {title:'韩国'},
  		    {title:'马尔代夫'},
  		    {title:'巴厘岛'}
  		  ]
  	}
  },
  methods:{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    skip(name){
      this.$router.push({name})
    },getData(){
    	
            let that = this  
             
            	
            
            axios.get('/api/searchlist/searchlist').then((response)=>{
                 that.inland = response.data.data.subjects
                
            })	
           
            
      },
    ha(e,params,name){
		if(e.keyCode==13){
			console.log(this.searchs,999)
		  this.cd.push(params)
		  this.searchs.title=''
		  this.searchs.id ++
		  localStorage.history = JSON.stringify(this.cd)
		  this.history = JSON.parse(localStorage.history?localStorage.history:'[]')
		}
		
	},
	exit(){
			localStorage.removeItem('history')
			this.history=[]
			this.cd=[]
	},
	add(params,res,name){
		console.log(res)
		 this.cd.push(params)
		 localStorage.history = JSON.stringify(this.cd)
		  localStorage.historys = JSON.stringify(res)
		   localStorage.name = JSON.stringify(name)
		  this.$router.push('searchchlid')
	}
		
  },
   created(){
        this.getData()
    }
}
</script>

<style lang="scss">

</style>