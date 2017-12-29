<template>
  <div id="app">
     <!-- <app-footer ></app-footer> -->
     <router-view/> 
  </div>
</template>

<script>
import AppFooter from './components/main/AppFooter.vue'
// import AppNearby from './components/main/AppNearby.vue'
export default {
  name: 'app',
  components:{
    AppFooter
  },
  data:function() {
    return {
      isFooterShow:true,
      isSelect:false,
      isupdatetShow:false
    }
  }
}
</script>

<style>

</style>
