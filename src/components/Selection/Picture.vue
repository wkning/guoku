<template>
	<transition name="fade">
	<div id="Picture">
		<ul>
			 <li v-for="(item,index) in dataList">
				<div @click="pushTo()"><img :src=item.cover></div>
				<div>{{item.title}}</div>
				<div>{{item.digest}}...</div>
				<div style="color:#999; font-size:12px;">
					<span >
						<icon name="眼睛" :scale="1.2"></icon>
						{{item.read_count}}
					</span>
					<span>
						<icon name="时间 钟表" :scale="1.2"></icon>
						{{item.pub_time |times}}小时前
					</span>
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
				console.log(1);
				var _this=this;
				this.$http.get(window.apiAddress+'/api/articles?page='+this.page).then(function(response){
						for(var item of response.data){
							item.cover="http://imgcdn.guoku.com/"+item.cover
							_this.dataList.push(item)
						}
					})
			},
			pushTo(id){

				//this.$store.state.dataId=id;
				//this.$router.push("/detail")
			}
		},
		filters:{
			times(val){
				let pubTime = new Date(val);
				let month = pubTime.getMonth();
				let day = pubTime.getDate();
				let hours = pubTime.getHours();
				let minute = pubTime.getMinutes();
				return hours;
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
				div:nth-child(4){
					padding-top:10px;
					display: flex;
					justify-content: space-between;
				}
			}
			
		}
	}
	.fade-enter-active,.fade-leave-active{
		  transition: all 0.9s ease-out;
		}
		/* 进入开始 */
		.fade-enter{
		  transform: translateX(0px);
		  opacity: 0;
		}
		/* 出去终点 */
		.fade-leave-active{
		  transform: translateX(500px);
		  opacity: 0;
		}
</style>
