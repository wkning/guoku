<template>
	<transition name="fade">
	<div id="navDetail">
		<div class="header">
			<span @click="backHome" style="padding:5px;"><icon name="左" scale="3"></icon></span>
			<span style="margin:0 auto;line-height:40px;">{{titles}}</span>
		</div>
		<div class="hotArtical">
			<div class="title">
				<b style="font-size:15px">图文</b>
				<span style="float:right; margin-right:10px; color:#999" @click="num=30">更多</span>
				<span style="float:right; margin-right:10px; color:#999" @click="num=3">收起</span>
			</div>
			<ul>
				<li v-for="(item,index) in articles" v-if="index<num">
					<div class="articlesLeft"><img :src=item.cover></div>
					<div class="articlesRight">
						<span>{{item.title}}</span>
						<span>{{item.digest}}</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="space">商品</div>
		<div class="Goods">
			<ul>
				<li v-for="(item,index) in entities" :key="index" :class="{line:index%2==0}">
					<div  @click="detail(item.entity.entity_id)"><img :src=item.chief_image></div>
					<div>
						<span>{{item.brand}}</span>
						<span>{{item.title}}</span>
						<span>¥{{item.price}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
	</transition>
</template>
<script>
import {mapState} from 'vuex'
	export default{
		data(){
			return {
				titles:this.$store.state.titles,
				entities:{},
				articles:{},
				num:3
			}
		},
		methods:{
			backHome(){
				this.$router.go(-1);
			}
		},
		created(){
			var _this=this;
			this.$http.get(window.apiAddress+"/api/category?id="+this.dataId+"&name=articles").then(function(response){
				for(var item of response.data.articles){
					item.cover="http://imgcdn.guoku.com/"+item.cover;
					}
				_this.articles=response.data.articles;
				console.log(response.data.articles)				
				})	

			this.$http.get(window.apiAddress+"/api/category?id="+this.dataId+"&name=selection").then(function(response){
				_this.entities=response.data;
				console.log(response.data)
				})
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
		  transition: all 0.9s ease-out;
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
	#navDetail{
		.header{
			height: 40px;
			border-bottom: 5px solid #ededed;
			display: flex;
			justify-content: space-between;
			font-weight: bold;
		}
		.space{
			height: 50px;
			background-color: #ededed;
			line-height: 50px;
		}
		.hotArtical{
			.title{
				height: 30px;
				line-height: 30px;
			}
			li{
				display: flex;
				border-bottom: 1px solid #ededed;
				padding:10px 0;
				.articlesLeft{
					flex:2;
					padding-top:10px;
				}
				.articlesRight{
					flex:3;
					display: flex;
					flex-direction: column;
					padding:10px;
					span:nth-child(1){
						font-weight: bold;
						font-size: 16px;
						flex: 1;
					}
					span:nth-child(2){
						flex: 1;
						color: #999;
						font-size: 13px;
						text-overflow: -o-ellipsis-lastline;  
						overflow: hidden;  
						text-overflow: ellipsis;  
						display: -webkit-box;  
						-webkit-line-clamp: 2;  
						-webkit-box-orient: vertical; 
					}
				}
			}
		}
		.Goods{
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
	}
</style>