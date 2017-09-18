<template>
	<div id="Setting">
		<div class="header">
			设置
		</div>
		<div class="content">
			<ul>
				<li><span>微信分享</span><span>></span></li>
				<li><span>分享应用到微博</span><span>></span></li>
				<li><span>App Store 评分</span><span>></span></li>
				<li></li>
				<li><span>清除图片缓存</span><span>></span></li>
				<li><span>意见反馈</span><span>></span></li>
			</ul>
		</div>
		<div class="footer">
			<span>登录</span>
			<span>version 4.3.0</span>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>

<style lang="scss" scoped>
	#Setting{
		background-color: #F1F0F0;
		.header{
			height:50px;
			text-align: center;
			line-height: 50px;
			font-weight: bold;
			font-size: 18px;
			background-color:white;
			margin-bottom: 20px;
		}
		.content{

			ul{
				display: flex;
				flex-direction: column;
				background-color:white;
				li{
					flex:1;
					display: flex;
					justify-content: space-between;
					padding:0 10px;
					height: 50px;
					border-bottom: 1px solid #F1F0F0;
					font-size: 15px;
					color:#666;
					span:nth-child(1){
						align-self:left;
						line-height: 50px;
					}
					span:nth-child(2){
						align-self:right;
						font-size: 18px;
						color: #999;
						font-weight:bolder;
						line-height: 50px;
					}
				}
				li:nth-child(4){
					background-color:#F1F0F0;
				}
			}
		}
		.footer{
			margin-top: 50px;
			display: flex;
			flex-direction: column;
			padding:20px;
			padding-bottom:130px;
			span{
				flex: 1;
				text-align: center;
				height: 40px;
				line-height: 40px;
			}
			span:nth-child(1){
				background-color:#008BFF;
				width: 100%;
				color: white;
				border-radius:8px;
			}
			span:nth-child(2){
				color: #999;
				font-size: 12px;
				height: 20px;				
			}
		}
	}
</style>