  <template lang="html">
  <div class="app-search-child">
       <div class="app-search-child-header">
      <span><i class="yo-ico" @click="skip('search')">&#xe6fb;</i></span>
      <div class="search" >
        <i class="yo-ico">&#xf067;</i>
        <input type="text" />
      </div>
      
    </div>
    <div class="search-con">
    	 <div class="cd-c clearfix" v-for="(searchs,i) in searchList" :key="i">
            <div class="cd-l-c">
                <img :src="searchs.imgPath" alt="" />
            </div>
            <div class="cd-r-c">
                <p><span>自由行</span> <span>|</span> <span>{{title}}</span></p>
                <p>[春节]上海直飞成都4-5天自由行（虹桥往返+早去早回+可换购拼车接/送机）</p>
                <div class="xxx clearfix">
                    <p><span>27</span>已售</p><p><span>1469</span>元起</p>
                </div>
            </div>
        </div>
    </div>
       
   
  </div>
</template>

<script>
export default {
  name:'app-search-child',
  data(){
  	return{
  		 searchList:JSON.parse(localStorage.historys?localStorage.historys:'[]'),
  		 title:JSON.parse(localStorage.name?localStorage.name:'')
  	}
  },
  methods:{
    skip(name){
      this.$router.push({name})
    }
		
	},
	mounted(){
	  document.getElementsByTagName('input')[0].value =this.title 
	 
  
	}
  
}
</script>

<style lang="scss">


</style>