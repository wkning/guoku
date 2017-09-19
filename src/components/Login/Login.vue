<template>
	<div id="Login">
		<div class="header">
			<span @click="close">✘</span>
		</div>
		<div class="content">
				      <!-- swiper -->
			<swiper :options="swiperOption">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>
		<div class="footer">
			<span>登录</span>
			<span>注册</span>
		</div>
		<div class="copyright">
			<span>使用果库,表示你已经同意</span><u>使用协议</u>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css') 
	export default{
		methods:{
			close(){
				this.$router.go(-1);
			}
		},
		components: {
			    swiper,
			    swiperSlide
		},
		data() {
		      return {
		        swiperOption: {
		          pagination: '.swiper-pagination',
		          nextButton: '.swiper-button-next',
		          prevButton: '.swiper-button-prev',
		          slidesPerView: 1,
		          paginationClickable: true,
		          spaceBetween: 30,
		          loop: true
		        }
		      }
		},
	}
</script>

<style lang="scss" scoped>
	#Login{
		.header{
			height: 40px;
			span{
				float: right;
				margin-right: 20px;
				font-weight: bold;
			}
		}
		.footer{
			display: flex;
			flex-direction: column;
			span{
				flex: 1;
				width: 50%;
				height: 40px;
				line-height: 40px;
				border: 1px solid #008BFF;
				text-align: center;
				margin-bottom:20px;
				color:#008BFF;
				border-radius:20px;
				margin:5px auto;
			}
		}
		.copyright{
			z-index: 3;
			background-color: white;
			position: fixed;
			bottom:0;
			left: 0;
			right: 0;
			padding-top:30px;
			text-align: center;
			padding-bottom: 20px;
			font-size: 12px;
			u{
				color:#008BFF;
			}
		}
	}
</style>