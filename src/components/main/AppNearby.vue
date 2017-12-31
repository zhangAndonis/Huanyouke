  <template lang="html">
  <div class="app-near body ">
    <div class="z-top">
    
        <span @click="skip('index')">返回</span>
        <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440"/>
    </div>
    <div class="content">
        <div class="z-delicacy">
           <div class="z-delicacy-top">
               <div class="z-left"><h1>特色美食</h1></div>
               <div class="z-right"><span>换一批</span></div>
           </div>
           <div class="z-delicacy-con">
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
                <div class="z-con1">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                 
                  <div>
                      <b>味千拉</b>
                      <span>距离43公里</span>
                  </div>
                </div>
           </div>



           <div class="z-delicacy-top">
               <div class="z-left"><h1>热门景点</h1></div>
               <div class="z-right"><span>换一批</span></div>
           </div>
           <div class="z-delicacy-con2">
                <div class="z-con2">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                  <b>北京八达岭长城</b>
                  <div><span>五星好评</span><b>999人点评</b></div>
                  <span>距离43公里</span>
                </div>
                <div class="z-con2">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                  <b>北京八达岭长城</b>
                  <div><span>五星好评</span><b>999人点评</b></div>
                  <span>距离43公里</span>
                </div>
                
           </div>
            <div class="z-delicacy-con2">
                <div class="z-con2">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                  <b>北京八达岭长城</b>
                  <div><span>五星好评</span><b>999人点评</b></div>
                  <span>距离43公里</span>
                </div>
                <div class="z-con2">
                  <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201703/13/58c6a0b784e96.jpg?imageView2/0/h/440">
                  <b>北京八达岭长城</b>
                  <div><span>五星好评</span><b>999人点评</b></div>
                  <span>距离43公里</span>
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