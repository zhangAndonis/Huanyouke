  <template lang="html">
  <div class="app-destination body ">
    <div class="destination-header">
    	<span @click="skip('index')">返回</span>
    	<div class="destination-search">
    		 <i class="yo-ico">&#xf067</i>
    		<input type="text" name="" id="" value=""placeholder="搜索目的地/名称"/>
    	</div>
    </div>
    <AppDesinationNow/>
    <AppDesinationHot/>
  </div>
</template>

<script>
import AppDesinationNow from './destination/now-con.vue'
import AppDesinationHot from './destination/hot-con.vue'
export default {
  name:'app-destination',
  components:{
  	AppDesinationNow,AppDesinationHot
  },
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>