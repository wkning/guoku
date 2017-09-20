<template>
	<div id="Tabbar">
		<ul>
			<li v-for="(item,index) in tabbarList" @click="pushTo(item.path,index)">
				<span :class="{bgColor:index==selectIndex}">
					<icon :name=item.name scale="3"></icon>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
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
				selectIndex:'1',
			}
		},
		methods:{
			pushTo(path,index){
				this.selectIndex=index
				this.$router.push(path);
			}
		}
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
		opacity: 0.9;
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