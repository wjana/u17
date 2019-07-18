<template>
	<main>
		<div class="myTop">
			<div class="photo">
				<img src="../../../data/img/photo.jpg"/>
			</div>
			<div class="info">
				<strong>惊艳时光</strong>
				<p>会员时长剩余<span>0</span>天</p>
			</div>
		</div>
		<ul class="property">
			<li>
				<p>0</p>
				<p>妖气币</p>
			</li>
			<li>
				<p>0</p>
				<p>月票</p>
			</li>
		</ul>
		<ul class="myOption">
			<li>
				<router-link to="/bookshelf">书架</router-link>
			</li>
			<li>
				<router-link to="/my">VIP充值</router-link>
			</li>
			<li>
				<router-link to="/recharge">妖气币充值</router-link>
			</li>
			<li>
				<router-link to="/my">消费记录</router-link>
			</li>
		</ul>
		<router-link to="/login">退出当前用户登录</router-link>
	</main>
</template>

<script>
	export const msgMy='个人中心'
	export default{
		mounted(){
			document.onscroll=null;
		}
	}
</script>

<style scoped="">
	main{
		background-color: #F2F2F2;
	}
	.myTop{
		width: 100%;
		box-sizing: border-box;
		padding: 39px 10px 15px 12.5px;
		margin-bottom: 10px;
		background-color: white;
	}
	.photo{
		width: 60px;
		height: 60px;
		border-radius: 40%;
		margin: 0 auto;
		overflow: hidden;
	}
	.photo img{
		width: 100%;
	}
	.info{
		margin-top: 10px;
	}
	.info strong{
		line-height: 26px;
	}
	.info p{
		color: #999999;
		font-size: 13px;
	}
	.info span{
		color: red;
		margin: 0 5px;
	}
	.property{
		padding: 4px 0;
		margin-bottom: 10px;
		box-sizing: border-box;
		background-color: white;
	}
	.property li{
		width: 49%;
		display: inline-block;
	}
	.property li p:first-child{
		font-size: 15px;
		line-height: 26px;
	}
	.property li p:last-child{
		font-size: 12px;
		color: #999999;
	}
	.myOption li{
		box-sizing: border-box;
		width: 100%;
		padding: 10px 0 9px 15px;
		text-align: left;
		border-bottom: 1px solid #dedede;
		background-color: white;
	}
	.myOption li a{
		font-size: 15px;
		line-height: 33px;
		width: 100%;
		display: inline-block;
	}
	.myOption li a::before{
		content: '';
		width: 33px;
		height: 33px;
		display: inline-block;
		background: url(../../assets/img/myIcon.png) no-repeat;
		background-size: 120px auto;
		vertical-align: middle;
		margin-right: 10px;
	}
	.myOption li a::after{
		content: '';
		width: 9px;
		height: 15px;
		display: inline-block;
		background: url(../../assets/img/more.png) no-repeat;
		background-size: 7px;
		float: right;
		margin: 10px 10px 0 0;
	}
	.myOption li:first-child{
		margin-bottom: 10px;
	}
	.myOption li:nth-child(1) a::before{
		background-position: 7px 4px;
	}
	.myOption li:nth-child(2) a::before{
		background-position: -25px 4px;
	}
	.myOption li:nth-child(3) a::before{
		background-position: -57px 5.5px;
	}
	.myOption li:nth-child(4) a::before{
		background-position: -91px 6px;
	}
	main>a{
		display: block;
		width: 100%;
		line-height: 55px;
		font-size: 15px;
		margin-top: 20px;
		background-color: white;
		border-top: 1px solid #dedede;
		border-bottom: 1px solid #dedede;
		color: #bbb;
	}
</style>