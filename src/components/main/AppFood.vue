  <template lang="html">
  <div class="app-food body ">
    <div class="food-header">
    	 <span @click="skip('index')">取消</span>
    </div>
    <div class="food-where">
    	 <div class="food-search">
    	 	 <input type="text" name="" id="" placeholder="去哪儿？"/>
    	 </div>
    	 <div class="food-position">
    	 	 <span>定位</span>
    	 	 <p>在附近</p>
    	 </div>
    </div>
    <div class="food-now">
    	<div class="food-now-search">
    		<span>最近查询</span>
    	</div>
    	 
    </div>
  </div>
</template>

<script>
export default {
  name:'app-food',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>