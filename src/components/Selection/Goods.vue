<template>
	<transition name="fade">
	<div id="Goods">
		<ul>
			<li v-for="(item,index) in dataList">
				<div @click="pushTo(item.content.note.entity_id)">
					<img :src=item.content.entity.chief_image>
				</div>
				<div>{{item.content.note.content}}</div>
				<div>
					<span>
						<icon name="心" :scale="2.2" style="padding-top:5px;"></icon>
						<b style="font-size:15px;">{{item.content.entity.like_count}}</b>
					</span>
					<span>
						<icon name="时间 钟表" :scale="1.2"></icon>
						{{item.post_time |times}}分钟前
					</span>
				</div>
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
				console.log(_this.dataList)
			})
		},
		methods:{
			pushTo(id){
				this.$store.state.dataId=id;
				this.$router.push("/detail")
			}
		},
		filters:{
			times(val){
				let pubTime = new Date(val);
				let month = pubTime.getMonth();
				let day = pubTime.getDate();
				let hours = pubTime.getHours();
				let minute = pubTime.getMinutes();
				return minute;
			}
		}
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
			div{
				flex: 1;
				padding:5px;
			}
			div:nth-child(3){
				display: flex;
				justify-content: space-between;
				color: #999;
				font-size: 13px;
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