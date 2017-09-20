import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		detailData:'',
		objStyle:'',
		navSelection:'',
		navCategory:'',
		titles:'',
		dataId:'',
		navId:''
	},
	getters:{
			
	},
	mutations:{
		navTabs(state,index){
        	state.dataId = index;
        	window.localStorage.setItem('dataId',index);
    	},
    	navTab(state,index){
        	state.navId = index;
        	window.localStorage.setItem('navId',index);
    	}
	},
	actions:{

	}
})