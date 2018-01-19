  <template lang="html">
  <div class="app-destination-now body ">
    <div class="now-con">
    	<div class="now-con-top">
    		<h1>最近浏览</h1>
    	</div>
    	<div class="now-img">
    		<div class="now-img-con">
    			<img src="../../../assets/destination/lately1.png" alt="" />
    		</div>
    		<div class="now-img-con">
    			<img src="../../../assets/destination/lately2.png" alt="" />
    		</div>
    		<div class="now-img-con">
    			<img src="../../../assets/destination/lately3.png" alt="" />
    		</div>
    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-destination-now',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>