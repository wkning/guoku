<template>
	<div id="scorllAD">
		<slider animation="fade" style="height:190px">
		  <slider-item v-for="(i, index) in banner" :key="index">
		    <img :src=i.img>
		  </slider-item>
		</slider>
	</div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'
	export default{
		props:["banner"],
		components: {Slider,SliderItem},

	}
</script>

<style lang="scss" scoped>
	
</style>