<template>
	<main>
		<div class="main">
			<p class="topImg"></p>
			<input type="text" name="" value="" placeholder="请输入账号/手机号/邮箱" />
			<input type="password" name="" value="" placeholder="密码" />
			<p class="forget"><router-link to="/login">忘记密码？</router-link></p>
			<p class="login" @click="login()"><router-link to="/login">登录</router-link></p>
			<p class="reg"><router-link to="/register">手机号快速注册</router-link></p>
			<div class="logBottom">
				<p>使用以下账号登录</p>
				<router-link to="/login">
					<img src="../../assets/img/qq.png"/>QQ
				</router-link>
				<router-link to="/login">
					<img src="../../assets/img/weibo.png"/>微博
				</router-link>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			login(){
				var n = document.getElementsByTagName('input')[0]
				var p = document.getElementsByTagName('input')[1]
				if(n.value==''){
					this.$toast({
						message: '用户名不能为空',
						position: 'center',
						duration: 1500
					});
				}else if(p.value==''){
					this.$toast({
						message: '密码不能为空',
						position: 'center',
						duration: 1500
					});
				}else{
					this.$router.push({path:'/index'})
				}
			}
		}
	}
</script>

<style scoped="">
	.main{
		width: 64%;
		padding: 30px 0;
		margin: 0 auto;
	}
	.main .topImg{
		width: 100%;
		height: 100px;
		background: url(../../assets/img/loginTopImg.png) no-repeat center top;
		background-size: 142.5px;
	}
	input{
		width: 100%;
		height: 42px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding-left: 30px;
		margin-bottom: 9px;
		outline: none;
		box-sizing: border-box;
		font-size: 14px;
	}
	.forget{
		text-align: right;
	}
	.login{
		height: 42px;
		line-height: 42px;
		background-color: #4fd962;
		border-radius: 5px;
		margin-top: 15px;
		cursor: pointer;
	}
	.login a{
		color: white;
	}
	.reg{
		margin-top: 15px;
	}
	.logBottom{
		margin-top: 50px;
		position: relative;
	}
	.logBottom p{
		width: 50%;
		font-size: 12px;
		color: #999;
		background-color: white;
		z-index: 2;
		margin: 0 auto;
	}
	.logBottom p::before{
		content: '';
		width: 100%;
		height: 1px;
		background-color: #e2e2e2;
		position: absolute;
		top: 8px;
		left: 0;
		z-index: -1;
	}
	.logBottom a{
		width: 17%;
		display: inline-block;
		margin: 15px 15px;
		color: #999;
		font-size: 12px;
	}
	.logBottom a img{
		width: 100%;
		margin-bottom: 5px;
	}
</style>