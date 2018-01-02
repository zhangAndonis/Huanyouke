  <template lang="html">
  <div class="app-destination-now body ">
    <div class="now-con">
    	<div class="now-con-top">
    		<h1>最近浏览</h1>
    	</div>
    	<div class="now-img">
    		<div class="now-img-con">
    			
    		</div>
    		<div class="now-img-con">
    			
    		</div>
    		<div class="now-img-con">
    			
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