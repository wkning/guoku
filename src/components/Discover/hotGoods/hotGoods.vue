<template>
	<div id="hotGoods">
		<ul>
			<li v-for="(item,index) in entities" :key="index" :class="{line:index%2==0}">
				<div  @click="detail(item.entity.entity_id)"><img :src=item.entity.chief_image></div>
				<div>
					<span>{{item.entity.brand}}</span>
					<span>{{item.entity.title}}</span>
					<span>¥{{item.entity.price}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:["entities"],
		methods:{
			detail(id){
				this.$store.state.dataId=id;
				this.$router.push("/detail")				
			}
		}
	}
</script>

<style lang="scss" scoped>
	#hotGoods{
		.line{
			border-right:1px solid #D7D5D5;
		}
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				width: 50%;
				padding: 10px;
				border-bottom: 1px solid #D7D5D5;
				div:nth-child(2){
					display: flex;
					flex-direction: column;
					span:nth-child(1){
						color: #999;
						padding-top:5px;
					}
					span:nth-child(2){
						font-weight: bold;
						padding-top:5px;
					}
					span:nth-child(3){
						color: blue;
						padding-top:20px;
					}
				}
			}
		}
	}
</style>