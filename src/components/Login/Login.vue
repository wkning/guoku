<template>
	<transition name="fade">
	<div id="Login">
		<div class="header">
			<span @click="close">✘</span>
		</div>
		<div class="content">
				      <!-- swiper -->
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in imgUrls" :key="index">
					<img :src=item.imgUrl>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="footer">
			<span @click="loginIn">登录</span>
			<span @click="loginZ">注册</span>
		</div>
		<div class="copyright">
			<span>使用果库,表示你已经同意</span><u>使用协议</u>
		</div>
	</div>
	</transition>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css') 
import picture1 from '../../assets/1.jpg'
import picture2 from '../../assets/2.jpg'
import picture3 from '../../assets/3.jpg'
	export default{
		methods:{
			close(){
				this.$router.go(-1);
			},
			loginIn(){
				this.$router.push('/logins')
			},
			loginZ(){
				this.$router.push('/loginUp')
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
		        },
		        imgUrls:[
		        	{imgUrl:picture1},
		        	{imgUrl:picture2},
		        	{imgUrl:picture3},
		        ]
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
	.fade-enter-active,.fade-leave-active{
		  transition: all 0.5s ease-out;
		}
		/* 进入开始 */
		.fade-enter{
		  transform: translateY(1000px);
		  opacity: 0;
		}
		/* 出去终点 */
		.fade-leave-active{
		  transform: translateY(-500px);
		  opacity: 0;
		}
</style>