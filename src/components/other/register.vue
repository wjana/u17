<template>
	<main>
		<div class="main">
			<p class="topImg"></p>
			<input type="text" name="" value="" placeholder="请填写手机号码" />
			<p class="ch">
				<input class="check" type="text" name="" value="" placeholder="请填写验证码" />
				<span>发送验证码</span>
			</p>
			<input type="password" name="" value="" placeholder="请输入密码" />
			<input type="password" name="" value="" placeholder="请确认密码" />
			<p class="register" @click="reg()"><router-link to="/register">注 册</router-link></p>
			<p class="agree">
				<input type="checkbox" checked="checked"/> 注册即接受 “用户协议”
			</p>
		</div>
		<div class="fixBottom" @click="playnone()" v-if="show"></div>
	</main>
</template>

<script>
	export const msgRes='注册'
	export default{
		data(){
			return{
				show:true
			}
		},
		methods:{
			playnone(){
				this.show=!this.show
			},
			reg(){
				var phone = document.getElementsByTagName('input')[0]
				var yan = document.getElementsByTagName('input')[1]
				var p1 = document.getElementsByTagName('input')[2]
				var p2 = document.getElementsByTagName('input')[3]
				var c = document.getElementsByTagName('input')[4]
				if(phone.value==''){
					this.$toast({
						message: '手机号不能为空',
						position: 'center',
						duration: 1500
					});
				}else if(yan.value==''){
					this.$toast({
						message: '短信验证码不能为空',
						position: 'center',
						duration: 1500
					});
				}else if(p1.value==''){
					this.$toast({
						message: '密码不能为空',
						position: 'center',
						duration: 1500
					});
				}else if(p2.value==''){
					this.$toast({
						message: '确认密码不能为空',
						position: 'center',
						duration: 1500
					});
				}else if(c.checked==''){
					this.$toast({
						message: '请确定用户协议哦',
						position: 'center',
						duration: 1500
					});
				}else{
					this.$router.push({path:'/index'})
				}
			}
		},
		mounted(){
			document.onscroll=null;
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
	.main>input,.check{
		width: 100%;
		height: 42px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding-left: 10px;
		margin-bottom: 9px;
		outline: none;
		box-sizing: border-box;
		font-size: 14px;
	}
	.main .check{
		margin-bottom: 23px;
	}
	.main .ch{
		position: relative;
	}
	.main span{
		position: absolute;
		top: 7px;
		right: 10px;
		background-color: #ffa800;
		color: white;
		width: 90px;
		height: 28px;
		font-size: 13px;
		line-height: 26px;
	}
	.register{
		height: 42px;
		line-height: 42px;
		background-color: #4fd962;
		border-radius: 5px;
		margin-top: 35px;
	}
	.register a{
		color: white;
	}
	.agree{
		margin-top: 12.5px;
		font-size: 12px;
		color: #999;
		text-align: left;
	}
	.fixBottom{
		position: fixed;
		bottom: 0;
		left: ;
		width: 100%;
		max-width: 750px;
		height: 62px;
		background: url(../../assets/img/registerBottom.jpg) no-repeat center center;
		background-size: 100%;
	}
</style>