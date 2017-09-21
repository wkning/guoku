<template>
	<transition name="fade">
	<div id="Detail">
			<div class="turnBack">
				<span @click="turnBack">＜</span>
				<span @click="share">▫▫▫</span>
				
			</div>
			 <swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in detailList.detail_images" :key="index">
					<img :src=item>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<ul>
				<li>
					<span>{{detailList.brand}}</span>
					<span>{{detailList.title}}</span>
				</li>				
				<li>
					<span>¥{{detailList.price}} 去购买</span>
					<span>❤喜爱</span>
				</li>
				<li>
					<span>推荐用户</span>
					<span @click="pushTo(detailList.entity_id)">
						{{detailList.like_count}}人喜爱 <icon name="右括号" :scale="1.2"></icon>						
					</span>
				</li>
				<li>
					<div>
						<span>
							{{detailList.note_count}}人点评
						</span>
						<span>+写点评</span>
					</div>
					<div>
						<div class="node_left">
							<img :src=imgurl >
						</div>
						<div class="node_right">
							<span>
								{{nickname}}
								<icon name="五角星" scale="1.5" style="float:right; margin-right:20px;"></icon>	
							</span>
							<span>{{detailnode.content}}</span>
							<span>
								<span>
									<icon name="点赞" scale="1.5" style="margin-right:10px;"></icon>
									<icon name="气泡" scale="1.5"></icon>
								</span>
								<span>
									<icon name="时间 钟表" scale="1.5" style="margin-top:5px;"></icon>
									{{detailnode.post_time}}
								</span>
							</span>
						</div>
					</div>
				</li>			
			</ul>
			<div class="space">
				<span>来自</span>
				<span>
					<icon name="右括号" scale="1.5"></icon>
				</span>
			</div>
			<div class="rec_img">				
				<span v-for="(item,index) in recommendation" :key="index">
					<img :src=item.chief_image>
				</span>				
			</div>
			<transition name="fade1">
			<div  class="bg" v-if="show">
				<div class="share" >
					<span style="color:#ccc;">————————分享————————</span>
					<span>
						<div class="uls">
							<li>
								<b><icon name="朋友圈" :scale="3.5"></icon></b>
								<a>分享</a>
							</li>
							<li>
								<b><icon name="微信" :scale="6"></icon></b>
								<a>微信</a>
							</li>
							<li>
								<b style="background-color:#FCFCB2;"><icon name="微博" :scale="4"></icon></b>
								<a>微博</a>
							</li>
							<li>
								<b><icon name="safari" :scale="5"></icon></b>
								<a>在Safari</a>
							</li>
							<li>
								<b><icon name="邮箱" :scale="7"></icon></b>
								<a>邮箱</a>
							</li>							
						</div>
						<div class="uls">
							<li>
								<b><icon name="刷新" :scale="3"></icon></b>
								<a>刷新</a>
							</li>
							<li>
								<b style="color:black"><icon name="复制" :scale="3"></icon></b>
								<a>邮箱</a>
							</li>	
							<li>
								<b><icon name="旗帜" :scale="3"></icon></b>
								<a>举报</a>
							</li>
							<li></li>
							<li></li>							
						</div>
					</span>
					<span @click="showShare">取消</span>
				</div>
			</div>
			</transition>	    		
	</div> 
	</transition>
</template>	
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState} from 'vuex'
require('swiper/dist/css/swiper.css') 
	export default{
		components: {
			    swiper,
			    swiperSlide
		},
		data(){
			return {
				detailList:{},
				detailnode:"",
				recommendation:{},
				show:false,
				swiperOption: {
		          pagination: '.swiper-pagination',
		          nextButton: '.swiper-button-next',
		          prevButton: '.swiper-button-prev',
		          slidesPerView: 1,
		          paginationClickable: true,
		          spaceBetween: 30,
		          loop: true
		        },
		        imgurl:"",
		        nickname:"",
			}
		},
		created(){
			var _this=this;
			this.$http.get(window.apiAddress+"/api/entity?id="+this.dataId).then(function(response){
				_this.detailList=response.data.entity;
				_this.detailnode=response.data.note_list[0];
				_this.recommendation=response.data.recommendation;
				_this.imgurl=_this.detailnode.creator.avatar_small;
				_this.nickname=_this.detailnode.creator.nickname;			
			})
		},
		methods:{
			turnBack(){
				this.$router.go(-1)
			},
			share(){
				this.show=true;
			},
			showShare(){
				this.show=false;
			},
			pushTo(){
				//this.$store.state.dataId=id;
				this.$router.push("/like")	
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
		})
	}
</script>
<style lang="scss">
	.fade-enter-active,.fade-leave-active{
		  transition: all 0.9s linear;
	}
	.fade-enter{
		  transform: translateX(-500px);
		  opacity: 0;
	}
	.fade-leave-active{
		  transform: translateX(500px);
		  opacity: 0;
	}
	.fade1-enter-active,.fade1-leave-active{
		  transition: all 0.9s linear;
	}
	.fade1-enter{
		  transform: translateY(-400px);
		  opacity: 0;
	}
	.fade1-leave-active{
		  transform: translateY(-400px);
		  opacity: 0;
	}
	#Detail{
		.bg{			
			.share{
			position:fixed;
			bottom:0;
			left: 0;
			right: 0;
			background-color:#F8F8F8;
			z-index: 3;
			display: flex;
			flex-direction: column;
				span{
					flex: 1;
				}
				span:nth-child(1){
					text-align: center;
					height: 50px;
					line-height: 50px;
				}
				span:nth-child(2){
					height: 200px;
					display: flex;
					flex-direction: column;
					.uls{
						flex: 1;
						display: flex;
						flex-direction: row;
						li{
							width: 20%;
							display: flex;
							flex-direction: column;
							padding:10px;
							b{
								background-color:white;
								width: 50px;
								height: 50px;
								border-radius:50%;
								overflow: hidden;
								text-align: center;
								display: flex;
								justify-content: center;
								align-items: center;
							}
							a{
								font-size: 12px;
								text-align: center;
							}
						}
					}

				}
				span:nth-child(3){
					text-align: center;
					height: 50px;
					line-height: 50px;
					background-color:#E5E5E5;
				}
			}
		}
		.turnBack{
			position: fixed;
			top: 0px;
			left: 0px;
			right: 0px;
			display: flex;
			justify-content: space-between;
			z-index: 2;
			span:nth-child(1){
				height: 40px;
				align-self:left;
				color: white;
				font-weight: bolder;
				font-size: 30px;
				text-shadow:5px 2px 6px #000;
			}
			span:nth-child(2){
				height: 40px;
				align-self:right;
				color: white;
				font-weight: bolder;
				font-size: 30px;
				text-shadow:5px 2px 6px #000;
				padding-right:15px;
			}

		}
		.space{
			height: 50px;
			background-color:#EDEBEB;
			display: flex;
			justify-content: space-between;
			span:nth-child(1){
				align-self:left;
				line-height: 50px;
				font-weight: bold;
				padding-left:20px;
			}
			span:nth-child(2){
				align-self:right;
				line-height: 50px;
				padding-right:20px;
			}
		}
		.detailAD{
			height:450px;
		}
		ul{
			display: flex;
			flex-direction: column;
			li{
				flex:1;
				display: flex;
			}
			li:nth-child(1){
				flex-direction: column;
				text-align: center;
				font-weight: bold;
				span{
					flex:1;
					height: 30px;
					line-height: 30px;
				}
			}
			li:nth-child(2){
				display: flex;
				flex-direction: row;
				text-align: center;
				span{
					margin:0 20px;
					flex:1;
					width:40%;
					height: 40px;
					line-height: 40px;
					border-radius: 5px;
					font-size: 13px;
				}
				span:nth-child(1){
					background-color: #3F3FA7;
					color: white;
				}
				span:nth-child(2){
					background-color: #E5E5E9;
					color: #333;
				}
			}
			li:nth-child(3){
				padding:0 20px;
				justify-content: space-between;
				border-bottom:1px solid #E5E5E9;
				font-size: 13px;
				span:nth-child(1){
					align-self: right;
					height: 40px;
					line-height: 40px;
				}
				span:nth-child(2){
					height: 40px;
					align-self: left;
					font-weight: bold;
					line-height: 40px;
				}
			}
			li:nth-child(4){
				flex-direction: column;
				div:nth-child(1){
					display: flex;
					justify-content: space-between;
					padding:0 20px;
					span{
						flex-direction: row;
					}
					span:nth-child(1){
						align-self:left;
						font-weight: bold;
						font-size: 15px;
						height: 40px;
						line-height: 40px;
					}
					span:nth-child(2){
						border:1px solid blue;
						height: 30px;
						width: 100px;
						line-height: 30px;
						margin-top: 10px;
						text-align: center;
						color:blue;
						font-size: 13px;
						border-radius:5px;
					}
				}
				div:nth-child(2){
					display: flex;
					flex-direction: row;
					.node_left{
						width: 40%;
						padding-top:20px;
						img{
							height: 70px;
							width: 100px;
							border-radius:50%;
							overflow: hidden;
						}
					}
					.node_right{
						padding-top:20px;
						display: flex;
						flex-direction: column;
						span:nth-child(1){
							font-weight: bold;
							color: blue;
							padding-bottom:15px;
						}
						span:nth-child(2){
							font-size: 14px;
							padding-bottom:20px;
						}
						span:nth-child(3){
							font-size: 12px;
							color: #999;
							text-align: right;
							display: flex;
							justify-content: space-between;
							flex-direction: row;
							height: 30px;
							padding:20px;
							margin-bottom: 20px;
							span:nth-child(1){
								line-height: 30px;
								align-self:left;
								color: #999;
								display: flex;
								flex-direction: row;
								padding-top:5px;
							}
							span:nth-child(2){
								align-self:right;
								line-height: 30px;
								display: flex;
								flex-direction: row;
							}
						}
					}
				}
			}
		}
		.rec_img{
				width: 100%;
				display: flex;
				flex-direction: rows;
				flex-wrap: wrap;
				span{
					width: 33.3%;
					height: 150px;
				}
		}

	}
</style>