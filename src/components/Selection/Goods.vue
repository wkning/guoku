<template>
	<transition name="fade">
	<div id="Goods">
		<ul>
			<li v-for="(item,index) in dataList">
				<span><img :src=item.content.entity.chief_image></span>
				<span>{{item.content.note.content}}</span>
				<span><icon name="心" :scale="2"></icon>{{item.content.entity.like_count}}</span>
			</li>
		</ul>
		<div class="">加载更多</div>
	</div>
	</transition>
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
			padding: 10px;
			span{
				flex: 1;
				padding:5px;
			}
		}
	}
	.fade-enter-active,.fade-leave-active{
		  transition: all 0.5s ease-in;
		}
		/* 进入开始 */
		.fade-enter{
		  transform: translateX(500px);
		  opacity: 0;
		}
		/* 出去终点 */
		.fade-leave-active{
		  transform: translateX(-500px);
		  opacity: 0;
		}
</style>