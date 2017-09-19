<template>
	<div id="loginIn">
		<div class="header">
			<span @click="back">
				<icon name="左" :scale="2"></icon>返回
			</span>
			<span>注册</span>
		</div>
		<div class="content">
			<span><input type="text" placeholder="昵称"></span>
			<span><input type="text" placeholder="邮箱"></span>
			<span><input type="password" placeholder="密码"></span>						
			<span>注册</span>
			<span>
				<b>使用果库,表示你已经同意</b>
				<u style="color: #444BFD;">使用协议</u>
			</span>
		</div>
		<div class="bg"></div>
	</div>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss">
	#loginIn{
		.header{
			height: 40px;
			border-bottom:1px solid #ccc;
			width: 100%;
			display: flex;
			flex-direction: row;
			span{
				line-height: 40px;
				flex: 1;
			}
			span:nth-child(1){
				margin-left: 10px;
				line-height: 40px;
			}
			span:nth-child(2){
				font-weight: bold;
				margin-left: -10px;
			}
		}
		.content{
			display: flex;
			flex-direction: column;
			padding: 40px;
			span{
				border-bottom:1px solid #ccc;
				input{
					width: 100%;
					height: 40px;
					border-style: none;
					outline:none;
				}
			}
			span:nth-child(4){
				height: 40px;
				line-height: 40px;
				text-align: center;
				border:1px solid #444BFD;
				margin-top: 20px;
				border-radius:20px;
				color: #444BFD;
			}
			span:nth-child(5){
				border:none;
				margin:20px auto;
				font-size: 13px;

			}
		}
	}
</style>