<template>
	<div id="Selection">
		<div class="navBar">
			<div v-for="(item,index) in selectionList" @click="pushTo(item.path,index)" >
				<span v-bind:class="{actived:selectIndex==index}"><b>{{item.title}}</b></span> 
			</div>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				selectionList:[
					{
						title:'商品',
						path:'/selection/goods'
					},
					{
						title:'图文',
						path:'/selection/picture'
					},
				],
				selectIndex:''
			}
		},
		methods:{
			pushTo(path,index){
				this.$router.push(path);
				this.selectIndex=index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navBar{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 63px;
		display: flex;
		color: #999;
		border-bottom:1px solid #D7D6D6;
		background-color: #fff;
		div{
			flex: 1;
			line-height: 64px;
			text-align: center;
			font-size: 16px;
			span{
				width: 50px;
				padding-bottom:5px; 
			}
		}
	}
	.actived{
		color: #000;
		border-bottom: 2px solid #000;
	}
</style>