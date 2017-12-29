  <template lang="html">
  <div class="app-destination body ">
     目的地
  </div>
</template>

<script>
export default {
  name:'app-destination',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>