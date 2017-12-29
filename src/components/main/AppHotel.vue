  <template lang="html">
  <div class="app-hotel body ">
    酒店
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