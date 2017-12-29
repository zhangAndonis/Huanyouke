  <template lang="html">
  <div class="app-food body ">
    美食
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