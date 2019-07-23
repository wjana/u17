<template>
	<main>
		<section>
			<div class="bg">
				<div class="triangle"></div>
			</div>
			<div class="infoTop">
				<img src="../../../data/img/img49.jpg"/>
				<div class="dec">
					<strong>镇魂街</strong>
					<p>许辰</p>
					<p>人气：<span>42.94亿</span></p>
				</div>
				<div class="icon">
					<i><img src="../../assets/img/iconCollect.png"/></i>
					<i @click="share()"><img src="../../assets/img/iconShare.png"/></i>
				</div>
				<router-link to="/zhenhunjie">继续阅读</router-link>
			</div>
		</section>
		<mt-popup v-model="popupVisible" position="center">
			<div class="shareway">
				<p>·分享至·</span></p>
				<ul>
					<li><router-link to="/zhenhunjie">
						<img src="../../assets/img/qzone.png"/>QQ空间
					</router-link></li>
					<li><router-link to="/zhenhunjie">
						<img src="../../assets/img/qq.png"/>QQ好友
					</router-link></li>
					<li><router-link to="/zhenhunjie">
						<img src="../../assets/img/weibo.png"/>新浪微博
					</router-link></li>
				</ul>
			</div>
		</mt-popup>
		<h5>
			<router-link to="/zhenhunjie"><i></i>动画</router-link>
		</h5>
		<section class="introduction">
			<p><strong>类型：</strong>少年  魔幻</p>
			<p>
				<strong>简介：</strong>
				镇魂街乃吸纳亡灵镇压恶灵之地。这是一个人灵共存的世界，但不是每个人都能进入镇魂街，只有拥有守护灵的寄灵人才可进入。
				夏铃原本是一名普通的大学实习生，但一次偶然导致她的人生从此不再平凡……
				在这个充满恶灵的世界，你能与你的守护灵携手生存下去吗？    
			</p>
		</section>
		<section class="list">
			<p>
				<strong>最新章节：</strong>
				<span>二五一 龙枪<i>VIP</i></span>
				<router-link to="/zhenhunjie">目录</router-link>
			</p>
			<p>3天前</p>
		</section>
		<section class="comment">
			<p>
				<strong>评论区：</strong>
				<router-link to="/commentForm">写评论</router-link>
			</p>
			<ul>
				<li v-for="(item,index) in topCom">
					<img :src="item.src"/>
					<div class="">
						<p class="name">{{item.name}}<img src="../../assets/img/istop.png"/></p>
						<p class="com" v-bind:class="{max:-1==num}">
							{{item.com}}
						</p>
						<!--<div class="show">
							<img src="../../assets/img/down.png" v-if="num!=-1" @click="show(-1)"/>
							<img src="../../assets/img/up.png" v-if="num==-1" @click="hide(-1)"/>
						</div>-->
						<p class="time">{{item.time}}</p>
					</div>
				</li>
				<li v-for="(item,index) in commentsList">
					<img :src="item.src"/>
					<div class="">
						<p class="name">{{item.name}}<i>{{item.grade}}</i></p>
						<p class="com" v-bind:class="{max:index==num}">{{item.com}}</p>
						<!--<div class="show">
							<img src="../../assets/img/down.png" v-if="num!=index" @click="show(index)"/>
							<img src="../../assets/img/up.png" v-if="num==index" @click="hide(index)"/>
						</div>-->
						<p class="time">{{item.time}}</p>
					</div>
				</li>
			</ul>
		</section>
		<!--回到顶部-->
		<div id="gotop" @click="gotop()">
			<img src="../../assets/img/gotop.png"/>
		</div>
		<div id="write">
			<router-link to="/commentForm"><img src="../../assets/img/writeCommen.png"/></router-link>
		</div>
		<!--底部固定 下载安装-->
		<div class="download">
			<img src="../../assets/img/download.png"/>
		</div>
	</main>
</template>

<script>
	export const msgZhen='镇魂街'
	export default{
		data(){
			return{
				topCom:[],
				commentsList:[],
				num:-2,
				popupVisible:false,
				com:''
			}
		},
		methods:{
			show(a){
				this.num=a
			},
			hide(a){
				this.num=-2
			},
			share(){
				this.popupVisible=true
			},
			gotop(){
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			}
		},
		mounted(){
			document.onscroll=null;
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
			document.documentElement.scrollTop=0;
			window.pageYOffset=0;
			document.body.scrollTop=0;
			
			this.$http.get('./data/zhenhunjieCom.json')
		    .then((res)=>{
		    	this.commentsList=res.data.commentsList;
		    	this.topCom=res.data.topCom;
		    })
		    .catch(()=>{
		    	
		    })
		    .finally((f)=>{
//		    	var com = document.getElementsByClassName('com')
//				for(var i=0;i<com.length;i++){
//					var s = document.getElementsByClassName('show')
//					if(com[i].offsetHeight != 125){
//						s[i].style.display='none'
//					}
//					console.log(com[i],com[i].offsetHeight)
//				}
				
				document.onscroll = function(){
					var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
					var show = document.getElementById('gotop')
					var write = document.getElementById('write')
					if(scrollTop>400){
						show.style.display='block';
						write.style.display='block';
					}else{
						show.style.display='none';
						write.style.display='none';
					}
				}
				
				this.com=this.$route.params.com
				var date1=new Date()
				var y=date1.getFullYear()
				var m=date1.getMonth()
				var d=date1.getDate()
				var h=date1.getHours()
				var min=date1.getMinutes()
				var s=date1.getSeconds()
				if(m<10){
					m="0"+(m+1)
				}
				var str=`${y}-${m}-${d} ${h}-${min}-${s}`
				if(this.com!=undefined){
					this.commentsList.unshift({
		    			src: "./data/img/photo.jpg",
		    			name:"惊艳时光",
		    			grade:"1",
		    			com:this.com,
		    			time:str
	    			})
				}
			});  
		}
	}
	
</script>

<style scoped="">
	.infoTop{
		width: 100%;
		padding: 16px 8px 8px 8px;
		box-sizing: border-box;
		/*filter: blur(10px);*/
		position: relative;
	}
	.infoTop>img{
		width: 32%;
		border: 1px solid white;
		border-radius: 5px;
	}
	.infoTop .dec{
		display: inline-block;
		width: 30%;
		text-align: left;
		padding-left: 8px;
		color: white;
	}
	.dec p{
		font-size: 12px;
		margin-top: 8px;
	}
	.dec p span{
		color: #ff655d;
	}
	.icon{
		position: relative;
		top: -25px;
		display: inline-block;
		width: 32%;
	}
	.icon i{
		display: inline-block;
		width: 40px;
		height: 40px;
		margin-left: 8px;
	}
	.icon i img{
		width: 100%;
	}
	.infoTop>a{
		display: inline-block;
		width: 200px;
		height: 40px;
		line-height: 40px;
		background-color: #1DDD8F;
		color: white;
		border-radius: 20px;
		position: absolute;
		bottom: 10px;
		left: 38%;
	}
	.bg{
		width: 100%;
		max-width: 750px;
		height: 44vw;
		max-height: 330px;
		z-index: -2;
		position: absolute;
		background: url(../../../data/img/img49.jpg) no-repeat right center;
		background-size: 3000px;
	}
	.triangle{
		width: 0;
		height: 0;
		border-width: 0 320px 60px 0;
		border-style: solid;
		border-color: transparent transparent white;
		position: absolute;
		bottom: -2px;
		z-index: -1;
	}
	h5{
		border-top: 1px solid #F2F2F2;
		border-bottom: 1px solid #F2F2F2;
	}
	h5 a{
		color: #999;
		font-weight: normal;
		line-height: 49px;
	}
	h5 a i{
		display: inline-block;
		width: 14px;
		height: 14px;
		background: url(../../assets/img/iconCartoon.png) no-repeat;
		background-size: 14px;
		margin-right: 3px;
	}
	.introduction{
		font-size: 14px;
		text-align: left;
		padding: 15px 15px 10px 15px;
		border-bottom: 1px solid #F2F2F2;
	}
	.introduction p{
		margin-bottom: 10px;
		line-height: 1.2;
	}
	.list{
		padding: 10px 25px 6px 15px;
		font-size: 14px;
		text-align: left;
		border-bottom: 1px solid #F2F2F2;
	}
	.list span i{
		display: inline-block;
		width: 29px;
		height: 15px;
		line-height: 16px;
		background-color: #fbd14b;
		color: white;
		font-size: 12px;
		text-align: center;
		border-radius: 10px;
		margin-left: 5px;
	}
	.list p a{
		color: #1DDD8F;
		float: right;
	}
	.list p a::after{
		display: inline-block;
		content: '';
		width: 11.5px;
		height: 11.5px;
		background: url(../../assets/img/greenmore.png) no-repeat;
		background-size: 11.5px;
		margin-left: 3px;
	}
	.list p:last-of-type{
		color: #999999;
	}
	.comment{
		text-align: left;
		padding: 8px 23px 56px 15px;
		box-sizing: border-box;
		
	}
	.comment>p{
		font-size: 14px;
	}
	.comment>p a{
		float: right;
		color: #1DDD8F;
	}
	.comment>p a::after{
		display: inline-block;
		content: '';
		width: 13px;
		height: 13px;
		background: url(../../assets/img/write.png) no-repeat;
		background-size: 13px;
		margin-left: 3px;
	}
	.comment ul li{
		padding: 19px 10px 15px 0;
		border-bottom: 1px solid #F2F2F2;
		width: 100%;
		box-sizing: border-box;
	}
	ul li>img{
		width: 12%;
		float: left;
		border-radius: 50%;
	}
	ul li>div{
		width: 86%;
		float: right;
		margin-left: 2%;
	}
	.name{
		color: #999999;
		font-size: 13px;
	}
	.name i{
		display: inline-block;
		width: 26px;
		height: 18px;
		background: url(../../assets/img/icon.png) no-repeat;
		background-size: 290px;
		background-position: 1.5px -13.5px;
   		vertical-align: middle;
   		margin-left: 4px;
   		color: white;
   		text-align: right;
   		box-sizing: border-box;
   		padding: 4px 3.5px 0 12.75px;
   		font-size: 12px;
	}
	.name img{
		width: 9%;
		vertical-align: middle;
		margin-left: 4px;
	}
	.com{
		color: #444;
		font-size: 14px;
		line-height: 1.8;
		margin-top: 10px;
		/*overflow: hidden;*/
		/*display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		word-break: break-all;
		text-overflow: ellipsis;*/
		/*max-height: 125px;*/
	}
	.show{
		width: 16%;
		height: 25px;
		margin: 8px auto;
	}
	.show img{
		width: 100%;
		vertical-align: middle;
	}
	.max{
		max-height: none;
	}
	.time{
		color: #999999;
		font-size: 12px;
	}
	#gotop{
		width: 10%;
		position: fixed;
		right: 5%;
		bottom: 100px;
		z-index: 100;
		display: none;
	}
	#gotop img,#write img{
		width: 100%;
	}
	#write{
		width: 10%;
		position: fixed;
		right: 5%;
		bottom: 200px;
		z-index: 100;
		display: none;
	}
	.download{
		position: fixed;
		bottom: 0;
		width: 100%;
		max-width: 750px;
	}
	.download img{
		width: 100%;
	}
	/*点击分享*/
	.mint-popup{
		width: 100%;
	}
	.shareway p{
		line-height: 60px;
		border-bottom: 1px solid #F2F2F2;
		font-size: 15px;
		color: #BBBBBB;
		position: relative;
	}
	.shareway p span{
		position: absolute;
		top: 1%;
		right: 15px;
		font-size: 12px;
	}
	.shareway ul{
		padding: 10px 0 30px 0;
	}
	.shareway li{
		width: 15%;
		margin: 0 5%;
	}
	.shareway li img{
		width: 100%;
	}
	.shareway li a{
		font-size: 12px;
		color: #999;
	}
</style>