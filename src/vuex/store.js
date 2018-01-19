

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  
    user_info:"",
    isShow:true
   
}

const getters = {
   
}


const mutations = {
   
    RegisterInfo(state,params){
      console.log(params,888)
    	state.user_info = params
    	localStorage.user_info = JSON.stringify(params)
    },
    exit(state){
    	state.user_info = {}
    	localStorage.removeItem('user_info')
    }
}

const actions = {
	
}

const store = new Vuex.Store({
    state,getters,mutations,actions
})

export default store