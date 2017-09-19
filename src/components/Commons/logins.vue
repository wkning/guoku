<template>
	<div id="loginIn">
		<div class="header">
			<span @click="back">
				<icon name="左" :scale="2"></icon>返回
			</span>
			<span>登录</span>
		</div>
		<div class="content">
			<span><input type="text" placeholder="电邮(example@guoku.com)"></span>
			<span><input type="password" placeholder="密码"></span>						
			<span>登录</span>
			<span>忘记密码</span>
		</div>
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
			span:nth-child(3){
				height: 40px;
				line-height: 40px;
				text-align: center;
				border:1px solid #444BFD;
				margin-top: 20px;
				border-radius:20px;
				color: #444BFD;
			}
			span:nth-child(4){
				border:none;
				margin:20px auto;
				color: #444BFD;
				font-size: 15px;
			}
		}
	}
</style>