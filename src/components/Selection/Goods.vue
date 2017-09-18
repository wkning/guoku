<template>
	<div id="Goods">
		<ul>
			<li v-for="(item,index) in dataList">
				<span><img :src=item.content.entity.chief_image></span>
				<span>{{item.content.note.content}}</span>
				<span>{{item.content.entity.like_count}}</span>
			</li>
		</ul>
		<div class="">加载更多</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				dataList:{},
			}
		},
		activated(){
			var _this=this;
			this.$http.get(window.apiAddress+'/api/selection').then(function(response){
				_this.dataList=response.data;
			})
		},
	}
	//?api_key=0b19c2b93687347e95c6b6f5cc91bb87&page=1
</script>
<style lang="scss">
	#Goods{
		margin-top: 64px;
		li{
			display: flex;
			flex-direction: column;
			span{
				flex: 1
			}
		}
	}
</style>