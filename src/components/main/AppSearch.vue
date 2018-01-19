  <template lang="html">
  <div class="app-search body ">
    <div class="app-search-header">
      <span><i class="yo-ico" @click="skip('index')">&#xe685;</i></span>
      <div class="search" @click="skip('search')">
        <i class="yo-ico">&#xf067;</i>
        <input type="text" placeholder="搜索目的地" @keyup="ha($event,{id:searchs.id,title:searchs.title})" v-model="searchs.title"/>
      </div>
       <span @click="skip('searchchlid')">搜索</span>
    </div>
    <div class="search-content">
    	<div class="history">
    		
    		<p>历史记录<span><img src="../../assets/search/search1.png" alt="" /></span><i @click="exit()">清空</i></p>
    		<ul>
    			
    			<li v-for="(searches,i) in history" :key="i">
    				{{searches.title}}
    			</li>
    			
    		</ul>
    	</div>
    	<AppSearchinland/>
    	
    	<div class="international">
    		<p>国际热门<span><img src="../../assets/search/search3.png" alt="" /></span></p>
    		<ul>
    			<li v-for="(internationals,i) in international" :key="i" @click="add({title:internationals.name},internationals.imageUrl,internationals.name)">{{internationals.name}}</li>
    			
    			
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import AppSearchinland from './search/AppSearchinland'
import axios from 'axios'
export default {
  name:'app-search',
  components:{
	AppSearchinland
  },
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
  		    
  		  ],
  		  isShow : true
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    },getData(){
            axios.get('/api/searchlist/searchlist').then((response)=>{
                 this.international = response.data.data.subjects
            })	   
      },
    ha(e,params){
		if(e.keyCode==13){
	
	
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
		console.log(name)
		 this.cd.push(params)
		 localStorage.history = JSON.stringify(this.cd)
		  localStorage.historys = JSON.stringify(res)
		  localStorage.name =  JSON.stringify(name)
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