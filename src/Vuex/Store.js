import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		titles:'',
		dataId:'',
		navId:'',
		selectIndex:''
	},
	getters:{
			
	},
	mutations:{
		navTabs(state,index){
        	state.dataId = index;
        	window.localStorage.setItem('dataId',index);
    	},
    	navIds(state,index){
        	state.navId = index;
        	window.localStorage.setItem('navId',index);
    	},
    	select(state,index){
        	state.selectIndex = index;
        	window.localStorage.setItem('selectIndex',index);
    	}
	},
	actions:{

	}
})