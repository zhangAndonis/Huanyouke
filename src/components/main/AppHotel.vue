  <template lang="html">
  <div class="app-hotel body ">
    <div class="hotel-header">
    	 <span @click="skip('index')">取消</span>
    </div>
    <div class="hotel-where">
    	 <div class="htoel-search">
    	 	 <input type="text" name="" id="" placeholder="去哪儿？"/>
    	 </div>
    	 <div class="htoel-position">
    	 	 <span>定位</span>
    	 	 <p>在附近</p>
    	 </div>
    </div>
    <div class="hotel-now">
    	<div class="hotel-now-search">
    		<span>最近查询</span>
    	</div>
    	 
    </div>
  </div>
</template>

<script>
export default {
  name:'app-hotel',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>