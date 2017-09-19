<template>
	<div id="navDetail">
		<div class="header">
			<span @click="backHome" style="padding:5px;"><icon name="左" scale="3"></icon></span>
			<span style="margin:0 auto;line-height:40px;">{{titles}}</span>
		</div>
		<div class="hotArtical">
			<div class="title">
				热门图文
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
</template>
<script>
	export default{
		data(){
			return {
				titles:this.$store.state.titles,
				entities:this.$store.state.navSelection,
				articles:this.$store.state.navCategory,
				num:3
			}
		},
		methods:{
			backHome(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss">
	#navDetail{
		.header{
			height: 40px;
			border-bottom: 1px solid #ededed;
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
						font-weight: bolder;
						font-size: 18px;
					}
					span:nth-child(2){
						color: #999;
						font-size: 15px;
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