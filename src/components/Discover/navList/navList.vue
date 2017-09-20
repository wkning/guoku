<template>
	<div id="navList">
		<ul>
			<li v-for="item in categories">
				<span style="color:#999" @click="navList(item.category.id,item.category.title)">
					<icon :name=item.category.name scale="4"></icon>
				</span>
				<span>
					{{item.category.title|delete}}
				</span>
			</li>
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
		},
		methods:{
			navList(id,val){
				this.$store.state.navId=id;
				this.$store.state.titles=val;
				this.$router.push("/navdetail")		
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
			font-size: 12px;
			li{
				width: 16.6%;
				padding: 10px 0;
				display: flex;
				flex-direction: column;
				span{
					padding:5px;
				}
			}
		}		
	}
</style>