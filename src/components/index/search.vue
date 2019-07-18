<template>
	<main>
		<div class="searchBox">
			<input class="l" type="text" name="" id="" value="" />
			<router-link to="/search" class="l">搜索</router-link>
		</div>
		<section class="type">
			<div class="typeTitle">
				<p>漫画分类</p>
			</div>
			<ul class="typeCon">
				<li v-for="(item,index) in typeList">
					<router-link to="/search">{{item}}</router-link>
				</li>
			</ul>
		</section>
		<section class="guest">
			<p>猜你喜欢</p>
			<ul>
				<li v-for="(item,index) in guestList">
					<router-link to="/search">
						<span><img :src="item.src"/></span>
						<span class="name">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<div class="download">
			<img src="../../assets/img/download.png"/>
		</div>
	</main>
</template>

<script>
	export const msgSearch='搜索分类'
	
	export default {
		data(){
			return{
				typeList:['魔幻','生活','动漫','科幻','少年','少女','推理',
					'同人','恋爱','纯爱','搞笑'
				],
				guestList:[
					{
						src:require('../../../data/img/img10.jpg'),
						name:'镇魂街'
					},
					{
						src:require('../../../data/img/img18.jpg'),
						name:'十万个冷笑话'
					},
					{
						src:require('../../../data/img/img20.jpg'),
						name:'端脑'
					}
				]
			}
		},
		mounted(){
			document.onscroll=null;
		}
	}
	
</script>

<style scoped="">
	.searchBox{
		box-sizing: border-box;
		width: 100%;
		padding: 12.5px 15px 12.5px 15px;
		overflow: hidden;
	}
	.searchBox input{
		width: 77%;
		font-size: 14px;
		line-height: 37px;
		border: 1px solid #49DDA1;
		border-radius: 19.5px 0 0 19.5px;
		outline: none;
		padding-left: 4%;
	}
	.searchBox a{
		width: 18%;
		line-height: 39px;
		text-align: center;
		background-color: #49DDA1;
		color: white;
		font-size: 15px;
		border-radius: 0 19.5px 19.5px 0;
	}
	.typeTitle{
		width: 100%;
		margin: 0 auto;
		text-align: center;
		color: #999999;
		position: relative;
	}
	.typeTitle p{
		width: 20%;
		margin: 0 auto;
		background-color: white;
		z-index: 2;
	}
	.typeTitle::before{
		content: '';
		width: 85%;
		height: 1px;
		background-color: #999999;
		position: absolute;
		top: 50%;
		left: 7%;
		z-index: -1;
	}
	.typeCon{
		padding: 12.5px 0 10px 10px;
		border-bottom: 7.5px solid #F2F2F2;
		overflow: hidden;
		text-align: left;
	}
	.typeCon li{
		width: 31%;
		text-align: center;
		margin: 0 1%;
		margin-bottom: 8px;
		line-height: 38px;
		background-color: #F2F2F2;
		border-radius: 19px;
	}
	.guest{
		margin-top: 30px;
		padding-bottom: 62px;
		text-align: left;
	}
	.guest p{
		color: #999999;
		line-height: 16px;
		margin-left: 5%;
	}
	.guest ul{
		display: flex;
		-moz-box-pack: justify;
		justify-content: space-between;
		padding: 0 4%;
	}
	.guest ul li{
		width: 31%;
		overflow: hidden;
		margin-top: 10px;
	}
	.guest li img{
		width: 100%;
		height: 82%;
	}
	.guest li a{
		font-size: 14px;
	}
	.name{
		display: block;
		width: 100%;
		line-height: 29px;
		text-align: left;
		overflow: hidden;
	}
	.download{
		position: fixed;
		bottom: -1px;
		width: 100%;
		max-width: 750px;
	}
	.download img{
		width: 100%;
	}
</style>