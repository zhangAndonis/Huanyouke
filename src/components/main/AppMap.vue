  <template lang="html">
  <div class="app-map body ">
   <div class="map-header">
   	<span>取消</span>
   	<span>搜索</span>
   </div>
  </div>
</template>

<script>
export default {
  name:'app-map',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>