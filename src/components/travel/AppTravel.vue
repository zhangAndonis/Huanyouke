<template lang="html">
  
  <div class="app-travel travel-body">
   
      <div class="travel-header">
      	<div class="travel_top">
      		<h1>游记</h1>
      	  <i class="yo-ico">&#xf067</i>
      	</div>
      	  
      </div>
      <AppTravelBanner/>
      <AppTravelcontent/>
  </div>
</template>

<script>
import axios from 'axios'
import AppTravelBanner from './travel-banner.vue'
import AppTravelcontent from './travel-content.vue'
export default {
  name:'app-travel',
  components:{
  AppTravelBanner,AppTravelcontent
  },
  data(){
  	return{
  		billboards:[],
  		scroll:''
  	}
  }
  }
</script>

<style lang="scss">

</style>