<template>
	<main>
		<header>
			<nav>
				<h1>
					<i @click="go()"></i>
					<span>{{txt}}</span>
				</h1>
				<ul class="navTopMenu r">
					<li>
						<router-link to="/search" class="ntmBtn ntmSearch"></router-link>
					</li>
					<li>
						<span class="ntmBtn ntmMy" @click="ntChange()">
							<ul v-show="show">
								<li><router-link to="/bookshelf"><i class="nti1"></i>书架</router-link></li>
								<li><router-link to="/my"><i class="nti2"></i>我的</router-link></li>
							</ul>
						</span>
					</li>
					<li>
						<router-link to="/index" class="ntmBtn ntmHome"></router-link>
					</li>
				</ul>
			</nav>
		</header>
		<router-view></router-view>
	</main>
</template>

<script>
	import {msgSearch} from "../index/search"
	import {msgUpdate} from "../index/update"
	import {msgBook} from "../index/bookshelf"
	import {msgMy} from "../index/my"
	import {msgRank} from "../index/ranking"
	import {msgZhen} from "../index/zhenhunjie"
	import {msgCom} from "../other/commentForm"
	import {msgRes} from "../other/register"
	import {msgRec} from "../other/recharge"
	export default{
		data(){
			return{
				show: false,
				txt:''
			}
		},
		methods:{
			ntChange(){
				this.show=!this.show
			},
			go(){
				this.$router.go(-1)
			}
		},
		watch:{
			$route:{
				handler(route){
					if(route.path=='/search'){
						this.txt=msgSearch
					}else if(route.path=='/update'){
						this.txt=msgUpdate
					}else if(route.path=='/ranking'){
						this.txt=msgRank
					}else if(route.path=='/my'){
						this.txt=msgMy
					}else if(route.path=='/bookshelf'){
						this.txt=msgBook
					}else if(route.path=='/history'){
						this.txt=msgBook
					}else if(route.path=='/zhenhunjie'){
						this.txt=msgZhen
					}else if(route.path=='/commentForm'){
						this.txt=msgCom
					}else if(route.path=='/register'){
						this.txt=msgRes
					}else if(route.path=='/recharge'){
						this.txt=msgRec
					}
				},
				immediate:true
			}
		}
	}
</script>

<style scoped="">
	header{
		padding-bottom: 14%;
	}
	header nav{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 9;
		background-color: white;
		padding: 3.33vw 12.5px 1.6vw 12.5px;
		box-sizing: border-box;
		border-bottom: 1px solid grey;
		max-width: 750px;
	}
	nav h1{
		width: 50%;
		display: inline-block;
		text-align: left;
		box-sizing: border-box;
	}
	nav h1 i{
		display: inline-block;
		width: 26px;
		height: 26px;
		background: url(../../assets/img/return.png) no-repeat;
		background-size: 13px;
		background-position: 4px 4.5px;
	}
	nav h1 span{
		display: inline-block;
		font-size: 18px;
		vertical-align: text-top;
	}
	
	.navTopMenu{
		width: 46%;
		height: auto;
		padding-top: 3px;
	}
	.navTopMenu li{
		width:31%;
		text-align: right;
	}
	.navTopMenu a,.navTopMenu .ntmMy{
		width: 26px;
		height: 26px;
		display: inline-block;
		background-image: url(../../assets/img/headerIcon.png);
		background-repeat: no-repeat;
		background-size: 105px auto;
	}
	.navTopMenu .ntmSearch{
		background-position: 0 0;
	}
	.navTopMenu .ntmMy{
		background-position: -28px 0;
		position: relative;
	}
	.navTopMenu .ntmMy ul{
		position: absolute;
		top: 25px;
    	left: -29px;
		width: 87px;
		height: 105px;
		background-image: url(../../assets/img/frame.png);
		background-size: 100% 100%;
		padding-top: 10px;
		z-index: 9;
	}
	.navTopMenu .ntmMy li{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid lightgray;
	}
	.navTopMenu .ntmMy a{
		display: block;
		color: #666;
		width: 50px;
		padding-left: 15px;
		font-size: 14px;
		background-image: none;
		margin: 15px auto;
		text-align: center;
	}
	.ntmMy a i{
		position: absolute;
		left: 12px;
		width: 26px;
		height: 26px;
		background: url(../../assets/img/headerIcon.png) no-repeat;
		background-size: 105px;
	}
	.ntmMy .nti1{
		background-position: 0 -22px;
		top: 18px;
	}
	.ntmMy .nti2{
		background-position: -29px -22px;
		top: 69px;
	}
	.navTopMenu .ntmHome{
		background-position: -62px 0;
	}
</style>