<template>
	<main>
		<section class="info">
			<p class="">当前账号：<span>惊艳时光</span></p>
			<p class="">余额：<span>0</span>妖气币</p>
		</section>
		<section class="number">
			<div class="money">
				充值金额：
				<p class="btn">
					<span class="minus btns l" @click="minus()"></span>
					<input id="in" class="l" type="text" v-model="n" @input="search()" />
					<span class="plus btns l" @click="plus()"></span>
				</p>
			</div>
			<p>妖气币数量：<span>{{msg}}</span>妖气币</p>
		</section>
		<ul class="type">
			<li class="ch">选择支付方式</li>
			<li class="ty">
				<img src="../../assets/img/alipy.png"/>支付宝
				<input type="radio" value="" checked="checked" />
			</li>
			<li class="ty"><img src="../../assets/img/recharge_more.png"/>更多方式尽在有妖气客户端<span>安装</span></li>
		</ul>
		<section class="pay" @click="pay()">
			<router-link to="/recharge">立即支付</router-link>
		</section>
	</main>
</template>

<script>
	export const msgRec='妖气币充值'
	
	export default{
		data(){
			return{
				msg:1000,
				n:10
			}
		},
		methods:{
			minus(){
				this.n--
				if(this.n<0){
					this.n=0
				}
				this.msg=this.n*100
			},
			plus(){
				this.n++
				this.msg=this.n*100
			},
			search(){
				if(this.n==''){
					this.n=''
					this.msg=0
				}else if(this.n<0){
					this.n=0
					this.msg=0
				}else{
					this.msg=this.n*100
				}
			},
			pay(){
				if(this.n<5){
					this.$toast({
						message: '每次最少也要充值5元哦',
						position: 'center',
						duration: 1500
					});
				}
			}
		}
	}
</script>

<style scoped="">
	main{
		background-color: #F2F2F2;
	}
	.info{
		padding:0 13px;
	}
	.info p{
		width: 49%;
		display: inline-block;
		font-size: 12px;
		line-height: 30px;
		text-align: left;
	}
	.info span{
		color: #999999;
	}
	.info p:last-of-type{
		text-align: right;
	}
	.info p:last-of-type span{
		color: #ff6000;
		margin-right: 5px;
	}
	.number{
		font-size: 14px;
		padding: 0 13px;
		text-align: left;
		background-color: white;
	}
	.money{
		line-height: 82px;
	}
	.btn{
		display: inline-block;
		width: 75%;
		height: 31px;
		vertical-align: middle;
	}
	.btns{
		display: inline-block;
		width: 22%;
		height: 100%;
		border: 1px solid #B3B3B3;
	}
	.minus{
		background: url(../../assets/img/iconMinus.png) no-repeat;
		background-size: 13.5px;
		background-position: 20px 10px;
		border-radius: 20px 0 0 20px;
	}
	.plus{
		background: url(../../assets/img/iconPlus.png) no-repeat;
		background-size: 13.5px;
		background-position: 22px 8px;
		border-radius: 0 20px 20px 0;
	}
	.btn input{
		width: 50%;
		height: 31px;
		text-align: center;
		border: 1px solid #B3B3B3;
		border-left: none;
		border-right: none;
		color: #ff6000;
	}
	.number>p{
		padding: 8px 0;
	}
	.number>p span{
		color: #ff6000;
		margin-right: 5px;
	}
	.type{
		margin-top: 10px;
		background-color: white;
	}
	.type li{
		width: 100%;
		padding: 11px 13px;
		box-sizing: border-box;
		border-bottom: 1px solid #B3B3B3;
		text-align: left;
	}
	.ch{
		color: #999999;
	}
	.ty img{
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
	.ty span{
		display: inline-block;
		width: 63px;
		line-height: 26px;
		background-color: #1DDD8F;
		color: white;
		text-align: center;
		border-radius: 20px;
		float: right;
	}
	.ty input{
		background-color: #ff5d5b;
		width: 20px;
		height: 20px;
		float: right;
		margin-top: 6px;
	}
	.pay{
		padding: 40px 13px;
	}
	.pay a{
		display: block;
		color: white;
		width: 100%;
		line-height: 40px;
		background-color: #ff655d;
		border-radius: 20px;
	}
</style>