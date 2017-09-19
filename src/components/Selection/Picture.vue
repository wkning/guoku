<template>
<transition name="fade">
	<div id="Picture">
		<ul>
			 <li v-for="(item,index) in dataList">
				<div><img :src=item.cover></div>
				<div>{{item.title}}</div>
				<div>{{item.digest}}...</div>
				<div>
					<span><icon name="眼睛" :scale="2"></icon>{{item.read_count}}</span>
					<span>{{item.pub_time}}</span>
				</div>
			</li> 
		</ul>
		<div @click="loadMore">加载更多</div>
	</div>
	</transition>
</template>
<script>
	export default{
		data(){
			return {
				dataList:{},
				page:1
			}
		},
		activated(){
			var _this=this;
			this.$http.get(window.apiAddress+'/api/articles?page=1').then(function(response){
				for(var item of response.data){
					item.cover="http://imgcdn.guoku.com/"+item.cover
				}
				_this.dataList=response.data;
			})
		},
		methods:{
			loadMore(){
				var _this=this;
				this.$http.get(window.apiAddress+'/api/articles?page='+this.page).then(function(response){
						for(var item of response.data){
							item.cover="http://imgcdn.guoku.com/"+item.cover
							_this.dataList.push(item)
						}
					})
			}
		}
	}
</script>
<style lang="scss">
	#Picture{
		margin-top: 64px;
		ul{
			li{
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid #D7D6D6;
			padding: 10px 15px;
			margin: 10px 0;
				div:nth-child(2){
					font-weight: bold;
					font-size: 15px;
					padding:10px 0;
				}
				div:nth-child(3){
					color: #999;
				}
			}
			
		}
	}
	.fade-enter-active,.fade-leave-active{
		  transition: all 0.5s ease-out;
		}
		/* 进入开始 */
		.fade-enter{
		  transform: translateX(-500px);
		  opacity: 0;
		}
		/* 出去终点 */
		.fade-leave-active{
		  transform: translateX(500px);
		  opacity: 0;
		}
</style>
