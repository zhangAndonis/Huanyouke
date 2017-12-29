  <template lang="html">
  <div class="app-map body ">
   地图
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