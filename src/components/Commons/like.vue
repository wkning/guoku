<template>
	<div id="authorized">
		<div class="header">
			<span @click="backHome" style="padding:5px;"><icon name="左" scale="3"></icon></span>
			<span style="margin:0 auto;line-height:40px;">{{count}}人喜爱</span>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in dataList">
					<div class="leftDiv">
						<img :src=item.avatar_small>
					</div>
					<div class="rightDiv">
						<div>
							<span  style="font-size:14px;"><b>{{item.nick}}</b></span>
							<span style="font-size:12px;">关注 {{item.like_count}} 粉丝{{item.fan_count}}</span>
						</div>
						<div>
							<div style="width:30px; height:25px;color:#5754FB; border:1px solid #5754FB; margin:10px; text-align:center; border-radius:7px;">
								<span style="line-height:25px;" @click="pushTo">
									<icon name="加号" :scale="1.5"></icon>
								</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return {
				dataList:{},
				count:""
			}
		},
		methods:{
			backHome(){
				this.$router.go(-1);
			},
			pushTo(){
				this.$router.push("/login")
			}
		},
		computed:mapState({
			dataId:function(state){
				if(state.dataId){
					this.$store.commit('navTabs',state.dataId)
				}
				let localData = window.localStorage.getItem('dataId')
				state.dataId=localData
				return state.dataId;
			}
		}),
		created(){
			var _this=this;
			this.$http.get(window.apiAddress+"/api/like?id="+this.dataId).then(function(response){
				_this.dataList=response.data.data;
				_this.count=response.data.count;
			})
		},
	}
</script>
<style lang="scss" scoped>
	#authorized{
		.header{
			height: 40px;
			border-bottom: 5px solid #ededed;
			display: flex;
			justify-content: space-between;
			font-weight: bold;
		}
		ul{
			display: flex;
			flex-direction: column;
			li{
				display: flex;
				flex-direction: row;
				margin:10px 0; 
				.leftDiv{
					width: 20%;
					img{
						width: 50px;
						height: 50px;
						border-radius: 50%;
						overflow: hidden;
					}
				}
				.rightDiv{
					display: flex;
					border-bottom:1px solid #ccc;
					width: 80%;
					justify-content: space-between;
					div:nth-child(1){
						display: flex;
						flex-direction: column;
					}
					div:nth-child(2){
						float: right;
					}
				}
			}
		}
	}
</style>