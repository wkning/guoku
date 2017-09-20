<template>
	<div id="hotArtical">
		<div class="title">热门图文</div>
		<ul>
			<li v-for="item in articles">
				<div class="articlesLeft"><img :src=item.article.cover ></div>
				<div class="articlesRight">
					<span>{{item.article.title}}</span>
					<span>{{item.article.digest}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props:["articles"],
	}
</script>

<style lang="scss" scoped>
	#hotArtical{
		.title{
			font-weight: bold;
			font-size: 15px;
			padding: 15px 10px;
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
					flex: 1;
					font-weight: bold;
					font-size: 16px;
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
</style>