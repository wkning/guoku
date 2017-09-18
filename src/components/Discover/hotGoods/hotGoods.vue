<template>
	<div id="hotGoods">
		<ul>
			<li v-for="(item,index) in entities" :key="index">
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
				var _this=this;
				this.$http.get(window.apiAddress+"/api/entity?id="+id).then(function(response){
				_this.$store.state.detailData=response.data
				_this.$router.push("/detail")
				})				
			}
		}
	}
</script>

<style lang="scss" scoped>
	#hotGoods{
		ul{
			display: flex;
			flex-wrap: wrap;
			li{
				width: 50%;
				padding: 10px;
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