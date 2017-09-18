<template>
	<div id="resUser">
		<div class="title">
			<a>推荐用户</a>
			<a>></a>
		</div>
		<swiper :options="swiperOption">
	        <swiper-slide v-for="(item,index) in authorizeduser" :key="index">
	        	<div>
	        		<span><img :src=item.user.avatar_large></span>
	        		<span>{{item.user.nickname}}</span>
	        	</div>
	        </swiper-slide>
   		</swiper>
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
		props:["authorizeduser"],
		data() {
			    return {
			        swiperOption: {
			          pagination: '.swiper-pagination',
			          slidesPerView: 5,
			          paginationClickable: true,
			          spaceBetween: 30,
			          freeMode: true
			        }
			    }
		}
	}
</script>
<style lang="scss" scoped>
	#resUser{
		div{
			display: flex;
			flex-direction: column;
			padding-bottom:5px;
			span:nth-child(1){
				width: 50px;
				height: 50px;
				border-radius: 50%;
				overflow: hidden;
			}
			span:nth-child(2){
				font-size: 10px;
				text-overflow: -o-ellipsis-lastline;  
				overflow: hidden;  
				text-overflow: ellipsis;  
				display: -webkit-box;  
				-webkit-line-clamp: 1;  
				-webkit-box-orient: vertical;
			}
		}
		.title{
			display: flex;
			flex-direction: row;
			padding-bottom: 15px;
			justify-content: space-between;
			a:nth-child(1){
				align-self: right;
				font-weight: bold;
				font-size: 15px;
			}
			a:nth-child(2){
				align-self: center;
			}
		}
	}
</style>