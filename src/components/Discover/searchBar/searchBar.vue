<template>
	<div id="searchBar">
		<input type="text" placeholder="☆搜索商品,图文">
	</div>
</template>
<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	#searchBar{
		display: flex;
		justify-content: center;
		padding: 10px 0;

		input{
			border-style: none;
			width: 95%;
			background-color: #F5F3F3;
			height: 30px;
		}
	}
</style>