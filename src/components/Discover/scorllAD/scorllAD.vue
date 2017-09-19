<template>
	<div id="scorllAD">
		<swiper :options="swiperOption">
	        <swiper-slide v-for="(i, index) in banner" :key="index">
	        	<img :src=i.img>
	        </swiper-slide>
	     </swiper>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css') 
	export default{
		props:["banner"],
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
	          paginationClickable: true,
	          spaceBetween: 100,
	          centeredSlides: true,
	          autoplay: 2500,
	          autoplayDisableOnInteraction: false
	    	}
	  	  }
	  	}	

	}
</script>

<style lang="scss" scoped>
	
</style>