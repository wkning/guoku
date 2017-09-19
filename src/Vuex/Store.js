import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		detailData:'',
		objStyle:'',
		navSelection:'',
		navCategory:'',
		titles:''
	},
	getters:{
			
	},
	mutations:{
		detailDatas(state,index){
			var objStr=JSON.stringify(state.detailData)
			objStr=index;
			window.localStorage.setItem('detailData',index)
		}
	},
	actions:{

	}
})