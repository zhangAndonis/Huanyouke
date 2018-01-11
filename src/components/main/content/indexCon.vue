  <template lang="html">
  <div class="app-index-con body ">
    <div class="list">
    
      <AppHotCon/>
      <AppRymCon/>
    
    </div>
  </div>
</template>

<script>
import AppHotCon from './indexhotCon'
import AppRymCon from './indexrymCon'
export default {
  name:'app-index-con',
  components:{
  	AppHotCon,AppRymCon
  },
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">
.b{
	
}
</style>