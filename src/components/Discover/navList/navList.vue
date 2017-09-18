<template>
	<div id="navList">
		<ul>
			<li v-for="item in categories">{{item.category.title|delete}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:["categories"],
		filters:{
			delete(value){
				return value.split(' ').slice(0,1).toString()
			}
		}
	}
</script>

<style lang="scss" scoped>
	#navList{
		ul{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			text-align: center;
			font-weight: bold;
			li{
				width: 16.6%;
				padding: 10px 0;
			}
		}		
	}
</style>