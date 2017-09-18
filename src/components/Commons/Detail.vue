<template>
	<div id="Detail">
			<swiper class="detailAD">
				<swiper-slide :options="swiperOption" v-for="(item,index) in detailList.detail_images" :key="index">
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
					<span>{{detailList.like_count}}人喜爱</span>
				</li>
				<li>
					<div>
						<span>{{detailList.note_count}}人点评</span>
						<span>+写点评</span>
					</div>
					<div>
						<div class="node_left">
							<img :src=detailnode[0].creator.avatar_small >
						</div>
						<div class="node_right">
							<span>{{detailnode[0].creator.nickname}}</span>
							<span>{{detailnode[0].content}}</span>
							<span>۞{{detailnode[0].post_time}}</span>
						</div>
					</div>
				</li>			
			</ul>
			<div class="rec_img">				
				<span v-for="(item,index) in recommendation" :key="index">
					<img :src=item.chief_image>
				</span>				
			</div>	    		
	</div>
</template>	
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css') 
	export default{
		components: {
			    swiper,
			    swiperSlide
		},
		data(){
			return {
				detailList:this.$store.state.detailData.entity,
				detailnode:this.$store.state.detailData.note_list,
				recommendation:this.$store.state.detailData.recommendation,
				swiperOption: {
				    pagination: '.swiper-pagination',
				    paginationClickable: true
				}
			}
		}
	}
</script>
<style lang="scss">
	#Detail{
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
						width: 20%;
						padding-top:20px;
						img{
							height: 30px;
							width: 40px;
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
						}
						span:nth-child(3){
							font-size: 12px;
							color: #999;
							text-align: right;
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
				}
		}

	}
</style>