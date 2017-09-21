<template>
	<div id="Tabbar">
		<ul>
			<li v-for="(item,index) in tabbarList" @click="pushTo(item.path,index)">
				<span :class="{bgColor:index==(selectIndex-1)}">
					<icon :name=item.name scale="3"></icon>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return {
				tabbarList:[
					{
						title:'信息',
						path:'/selection/goods',
						name:'favorite'
					},
					{
						title:'发现',
						path:'/discover',
						name:'compass'
					},
					{
						title:'登录',
						path:'/login',
						name:'account'
					},
					{
						title:'设置',
						path:'/setting',
						name:'set'
					},
				],
				
			}
		},
		methods:{
			pushTo(path,index){
				this.$store.state.selectIndex=index+1
				this.$router.push(path);
			}
		},
		computed:mapState({
			selectIndex:function(state){
				if(state.selectIndex){
					this.$store.commit('select',state.selectIndex)
				}
				let localData = window.localStorage.getItem('selectIndex')
				state.navId=localData
				return state.navId;
			}
		})
	}
</script>

<style lang="scss" scoped>
	#Tabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 44px;
		border-top: 1px solid #D7D6D6;
		
		background-color: #fff;
		z-index: 1;
		ul{
			display: flex;
			li{
				flex: 1;
				line-height: 44px;
				text-align: center;
				font-size: 25px;
			}
		}
	}
	.bgColor{
		color: #05CE7C;
	}
</style>