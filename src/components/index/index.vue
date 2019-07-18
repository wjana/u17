<template>
	<main>
		<!--轮播-->
		<div class="loop">
			<mt-swipe :auto="4000">
				<mt-swipe-item><router-link to="/"><img src="../../../data/img/img3.jpg"/></router-link></mt-swipe-item>
				<mt-swipe-item><router-link to="/"><img src="../../../data/img/img4.jpg"/></router-link></mt-swipe-item>
				<mt-swipe-item><router-link to="/"><img src="../../../data/img/img5.jpg"/></router-link></mt-swipe-item>
			</mt-swipe>
		</div>
		<!--更新 排行-->
		<nav class="nav">
			<router-link to="/update">
				<i class="nPic ud"></i>更新
			</router-link>
			<router-link to="/ranking">
				<i class="nPic rank"></i>排行
			</router-link>
		</nav>
		<!--墙裂推荐-->
		<section class="recommend">
			<div class="rTitle">
				<img src="../../assets/img/bgRecommend.png"/>
			</div>
			<ul class="padding">
				<li v-for="(item,index) in recList">
					<router-link :to="item.to">
						<span><img :src="item.src"/></span>
						<span class="recDes">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<!--人气作品-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">人气作品</span>
				<router-link to="/">更多</router-link>
			</div>
			<ul class="cariContent">
				<li v-for="(item,index) in popularList">
					<router-link to="/">
						<span><img :src="item.src"/></span>
						<span class="cariName">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<!--精品推荐-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">精品推荐</span>
				<router-link to="/">更多</router-link>
			</div>
			<ul class="cariContent">
				<li v-for="(item,index) in fineList">
					<router-link to="/">
						<span><img :src="item.src"/></span>
						<span class="cariName">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<!--热力点击-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">热力点击</span>
				<router-link to="/">更多</router-link>
			</div>
			<ul class="hotCon padding">
				<li v-for="(item,index) in hotList">
					<router-link to="/">
						<div class="hotImg l"><img :src="item.src"/></div>
						<div class="hotDes r">
							<span class="hotName">{{item.name}}</span>
							<span>{{item.tag}}</span>
							<span>{{item.author}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--今日推荐-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">今日推荐</span>
			</div>
			<ul class="todayCon padding">
				<li v-for="(item,index) in todayList">
					<router-link to="/">
						<div class="todayImg l"><img :src="item.src"/></div>
						<div class="todayDes r">
							<div class="todayName">
								<span>{{item.name}}</span>
								<span class="tdAu">{{item.author}}</span>
							</div>
							<p>{{item.tag}}</p>
							<p>{{item.remarks}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--完结漫画-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">完结漫画</span>
				<router-link to="/">更多</router-link>
			</div>
			<ul class="cariContent">
				<li v-for="(item,index) in finishList">
					<router-link to="/">
						<span><img :src="item.src"/></span>
						<span class="cariName">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<!--全彩漫画-->
		<section class="caricature">
			<div class="cariHeader">
				<span class="cariTitle">全彩漫画</span>
				<router-link to="/">更多</router-link>
			</div>
			<ul class="cariContent">
				<li v-for="(item,index) in colorfulList">
					<router-link to="/">
						<span><img :src="item.src"/></span>
						<span class="cariName">{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<!--底部-->
		<footer>
			<router-link to="/">成为作者</router-link>
			<router-link to="/">意见反馈</router-link>
			<router-link to="/">电脑版</router-link>
		</footer>
		<!--回到顶部-->
		<div id="gotop" @click="gotop()">
			<img src="../../assets/img/gotop.png"/>
		</div>
		<!--底部固定 下载安装-->
		<div class="download">
			<img src="../../assets/img/download.png"/>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				recList:[],
				popularList:[],
				fineList:[],
				hotList:[],
				todayList:[],
				finishList:[],
				colorfulList:[]
			}
		},
		methods:{
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
			
			this.$http.get('./data/index.json')
		    .then((res)=>{
			    this.popularList=res.data.popularList;
			    this.recList=res.data.recList;
			    this.fineList=res.data.fineList;
			    this.hotList=res.data.hotList;
			    this.todayList=res.data.todayList;
			    this.finishList=res.data.finishList;
			    this.colorfulList=res.data.colorfulList;
		    })
		    .catch(()=>{
		    	
		    })
		    .finally((f)=>{
		    	document.onscroll = function(){
					var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
					var show = document.getElementById('gotop')
					if(scrollTop>400){
						show.style.display='block';
					}else{
						show.style.display='none';
					}
				}
		    });
		}
	}
</script>

<style scoped="">
	.loop{
		width: 100%;
		overflow: hidden;
	}
	.loop img{
		width: 100%;
	}
	.nav{
		width: 100%;
		background: url(../../assets/img/line.png) no-repeat center center;
		background-size: auto 50px;
	}
	.nav a{
		width: 49%;
		height: 50px;
		display: inline-block;
		line-height: 50px;
		font-size: 17px;
	}
	.nPic{
		display: inline-block;
		width: 28px;
		height: 25px;
		background: url(../../assets/img/indexIcon.png) no-repeat;
		background-size: 220px;
		vertical-align: middle;
		margin-right: 2%;
	}
	.nav .ud{
		background-position: -24px -29px;
	}
	.nav .rank{
		background-position: 3px -29px;
	}
	.recommend{
		border-bottom: 18px solid #f2f2f2;
	}
	.recommend .rTitle{
		width: 100%;
		background-color: #49dda1;
		border-radius: 10px 10px 0 0;
		margin-bottom: 15px;
	}
	.rTitle img{
		margin-top: 12.5px;
	}
	.recommend ul{
	    display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    justify-content: space-between;
	}
	.recommend ul li{
		width: 31%;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
		margin-bottom: 15px;
	}
	.recommend li img{
		width: 100%;
	}
	.recommend li .recDes{
		display: block;
		line-height: 30px;
		font-size: 14px;
		overflow: hidden;
    	white-space: nowrap;
	}
	.caricature{
		border-bottom: 10px solid #F2F2F2;
	}
	.cariHeader{
		text-align: center;
		line-height: 40px;
		position: relative;
	}
	.cariHeader span{
		display: block;
		font-weight: bold;
	}
	.cariHeader a{
		position: absolute;
		top: 0;
		right: 5%;
		color: #bbb;
		font-size: 13px;
		width: 14%;
	}
	.cariHeader a::after{
		content: '';
		width: 9px;
		height: 9px;
		display: inline-block;
		background: url(../../assets/img/more.png) no-repeat center center;
		background-size: 100%;
	}
	.cariContent{
		display: flex;
	    flex-direction: row;
	    flex-wrap: wrap;
	    justify-content: space-between;
	    padding: 0 3%;
	}
	.cariContent li{
		width: 31%;
	}
	.cariContent li img{
		width: 100%;
		/*height: 82%;*/
	}
	.cariContent li a{
		font-size: 14px;
	}
	.cariContent .cariName{
		display: block;
		width: 100%;
		height: 29px;
		line-height: 29px;
		text-align: left;
		overflow: hidden;
	}
	.hotCon li{
		width: 100%;
		margin: 0 auto 11px auto;
		background-color: #F2F2F2;
		text-align: left;
	}
	.hotImg{
		width: 50%;
		height: 100%;
	}
	.hotImg img{
		width: 100%;
	}
	.hotDes{
		width: 40%;
		height: 100%;
		padding: 2% 0 0 10%;
	}
	.hotDes span{
		display: block;
		color: #999;
		line-height: 19px;
		font-size: 12px;
	}
	.hotDes .hotName{
		font-size: 13px;
		font-weight: bold;
		line-height: 29px;
		color: #333;
	}
	.todayCon{
		width: 100%;
		overflow: hidden;
		padding-bottom: 16.5px;
	}
	.todayImg{
		width: 30%;
	}
	.todayImg img{
		width: 100%;
	}
	.todayDes{
		width: 65%;
		padding-left: 5%;
		text-align: left;
	}
	.todayName{
		margin-top: 16.5px;
	}
	.todayName>span{
		display: inline-block;
		line-height: 43px;
		font-size: 16.5px;
		color: #444;
	}
	.todayName .tdAu{
		font-size: 14px;
	}
	.todayDes p{
		line-height: 9vw;
		color: #999;
		font-size: 13px;
	}
	.todayDes p:last-child{
		font-size: 12px;
	}
	footer{
		width: 100%;
		background-color: #F2F2F2;
		padding-bottom: 60px;
	}
	footer a{
		width: 25%;
		display: inline-block;
		color: #bbb;
		line-height: 66px;
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
	#gotop{
		width: 10%;
		position: fixed;
		right: 5%;
		bottom: 100px;
		z-index: 100;
		display: none;
	}
	#gotop img{
		width: 100%;
	}
</style>