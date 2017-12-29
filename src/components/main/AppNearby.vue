  <template lang="html">
  <div class="app-near body ">
    <div class="z-top">
    
        <span @click="skip('index')">返回</span>
        <img src="http://gallery.youxiake.com/Public/Data/upload/201710/16/33171508146250.jpg"/>
    </div>
    <div class="content">
        <div class="z-delicacy">
           <div class="z-delicacy-top">
               <div class="z-left"><h1>特色美食</h1></div>
               <div class="z-right"><span>换一批</span></div>
           </div>
           <div class="z-delicacy-con">
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201701/06/586f5eb12b0b6.jpg?imageView2/0/h/300">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201701/06/586f5eb12b0b6.jpg?imageView2/0/h/300">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201701/06/586f5eb12b0b6.jpg?imageView2/0/h/300">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'app-near',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>