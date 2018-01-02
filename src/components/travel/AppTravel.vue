<template lang="html">
  
  <div class="app-travel travel-body">
      <app-footer ></app-footer>  
      <div class="travel-header">
      	  <h1>游记</h1>
      </div>
      <AppTravelBanner/>
      <AppTravelcontent/>
  </div>
</template>

<script>
import AppFooter from '../main/AppFooter.vue'
import AppTravelBanner from './travel-banner.vue'
import AppTravelcontent from './travel-content.vue'
export default {
  name:'app-travel',
  components:{
    AppFooter,AppTravelBanner,AppTravelcontent
  }
}
</script>

<style lang="scss">

</style>