<template>
	<main>
		<ul>
			<li v-for="(item,index) in topList">
				<router-link to="/ranking">
					<img :src="item.src"/>
					<div class="des">
						<h3>{{item.name}}</h3>
						<p><i></i>{{item.author}}</p>
						<p><i></i>{{item.tag}}</p>
					</div>
					<span><img :src="item.rank"/></span>
				</router-link>
			</li>
			<li v-for="(item,index) in rankingList">
				<router-link to="/ranking">
					<img :src="item.src"/>
					<div class="des">
						<h3>{{item.name}}</h3>
						<p><i></i>{{item.author}}</p>
						<p><i></i>{{item.tag}}</p>
					</div>
					<span>{{item.rank}}</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
	export const msgRank='排行榜'
	
	export default{
		data(){
			return{
				topList:[],
				rankingList:[]
			}
		},
		mounted(){
			document.onscroll=null
			
			this.$http.get('./data/ranking.json')
		    .then((res)=>{
		      this.topList=res.data.topList;
		      this.rankingList=res.data.rankingList;
		    })
		    .catch(()=>{
		      
		    })
		    .finally((f)=>{
		    	
		    });  
		}
	}
</script>

<style scoped="">
	main{
		background-color: #F2F2F2;
	}
	li{
		width: 100%;
		margin-top: 5px;
		box-sizing: border-box;
		padding: 5px 8px 8px 8px;
		background-color: white;
	}
	li img{
		width: 21%;
		float: left;
	}
	.des{
		width: 64%;
		float: left;
		padding-left: 4%;
		text-align: left;
		margin-top: 8px;
		line-height: 30px;
	}
	.des p{
		color: #999999;
		font-size: 12px;
	}
	.des p i{
		display: inline-block;
		width: 15px;
		height: 16px;
		background: url(../../assets/img/updateIcon.png) no-repeat;
		background-size: 55px;
		vertical-align: middle;
	}
	.des p:first-of-type i{
		background-position: 3px 2px;
	}
	.des p:last-of-type i{
		background-position: -18px 2px;
	}
	span{
		display: inline-block;
		width: 10%;
		font-size: 27px;
		font-weight: bold;
		color: #999999;
		box-sizing: border-box;
		margin-top: 10px;
	}
	span img{
		width: 100%;
	}
	li:first-of-type{
		margin-top: 0px;
	}
</style>