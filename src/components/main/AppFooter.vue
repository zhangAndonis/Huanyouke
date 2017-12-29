  <template lang="html">
  <div class="app-footer body ">
    
    <div class="footer">
         <ul>
           
            <li @click="skip('index')">
               <i class="yo-ico">&#xe62b;</i>
               <span>首页</span>
              
            </li>
            <li @click="skip('find')">
               <i class="yo-ico">&#xe608;</i>
               <span>发现</span>
            </li>
            <li @click="skip('index')">
               <i class="yo-ico">&#xe614;</i>
               <span>游记</span>
            </li>
            <li @click="skip('index')">
               <i class="yo-ico">&#xe604;</i>
               <span>我的</span>
            </li>
         </ul>
    </div>
  
  </div>
</template>

<script>
// import router from './router'
export default {
  name:'app-footer',
  methods:{
    skip(name){
      this.$router.push({name})
    }
  }
}
</script>

<style lang="scss">

</style>

  
  
  
  