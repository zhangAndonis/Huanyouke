  <template lang="html">
  <div class="app-footer body ">
    
    <div class="footer">
         <ul>
           <router-link :to='type.name' v-for="type in types" tag="li" class="nav">
           	<i class="yo-ico" v-html="type.icon" ></i>
           	<span>{{type.content}}</span>
           	</router-link>
           
           
         </ul>
    </div>
  
  </div>
</template>

<script>

export default {
  name:'app-footer',
  data(){
  	return{
  		  types:[
  		    {name:'index',content:'首页',icon:'&#xe62b;'},
  		    {name:'find',content:'发现',icon:'&#xe612;'},
  		    {name:'travel',content:'游记',icon:'&#xe614;'},
  		    {name:'mine',content:'我的',icon:'&#xe657;'}
  		  ]

  	}
  },
  methods:{
    skip(name){
    
      this.$router.replace({name})
       
  
    }
    
  }
}
</script>

<style lang="scss">
.nav.router-link-active{
	color: #ffd034;
}
</style>

  
  
  
  