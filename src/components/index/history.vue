<template>
	<main>
		<ul class="bNav">
			<li><router-link to="/bookshelf">收藏</router-link></li>
			<li class="active"><router-link to="/history">历史</router-link></li>
		</ul>
		<ul class="records">
			<li v-for="(item,index) in reList">
				<img :src="item.src"/>
				<div class="con l">
					<h3>{{item.name}}</h3>
					<p>{{item.author}}</p>
					<p>{{item.tag}}</p>
					<p>{{item.play}}</p>
				</div>
				<router-link to="/history">继续阅读</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
	export const msgBook='书架'
	export default{
		data(){
			return{
				reList:[]
			}
		},
		mounted(){
			document.onscroll=null;
			document.documentElement.scrollTop = 0;
			
			this.$http.get('./data/history.json')
		    .then((res)=>{
		     	this.reList=res.data.reList;
		    })
		    .catch(()=>{
		    
		    })
		    .finally((f)=>{
		    	
		    })
		}
	}
</script>

<style scoped="">
	main{
		background-color: #F2F2F2;
	}
	.bNav{
		position: fixed;
		width: 100%;
		max-width: 750px;
		background-color: white;
		z-index: 2;
	}
	.bNav li{
		width: 35%;
		line-height: 45px;
		font-size: 15px;
	}
	.bNav li a{
		color: #999;
	}
	.active a{
		color: #333333;
	}
	.active::before{
		content: '';
		width: 32px;
		height: 3.5px;
		background-color: #1DDD8F;
		position: absolute;
		bottom: 0;
		border-radius: 3px;
	}
	.records{
		padding-top: 47px;
	}
	.records li{
		box-sizing: border-box;
		width: 100%;
		padding: 5px 8px 8px 8px;
		border-top: 1px solid #F2F2F2;
		background-color: white;
	}
	.records li:first-child{
		border-top: none;
	}
	.records img{
		width: 21%;
		float: left;
	}
	.records .con{
		width: calc(59% - 10px);
		text-align: left;
		padding-left: 10px;
		line-height: 22px;
		padding-top: 5px;
		box-sizing: border-box;
	}
	.con h3{
		font-weight: bold;
		margin-bottom: 3px;
	}
	.con p{
		color: #999;
		font-size: 12px;
	}
	.con p::before{
		content: '';
		width: 15px;
		height: 23px;
		display: inline-block;
		background: url(../../assets/img/updateIcon.png) no-repeat;
		background-size: 55px;
		vertical-align: middle;
	}
	.con p:nth-of-type(1)::before{
		background-position: 3px 5px;
	}
	.con p:nth-of-type(2)::before{
		background-position: -18px 5px;
	}
	.con p:nth-of-type(3)::before{
		background-position: -41px 5px;
	}
	.records li a{
		display: inline-block;
		width: 20%;
		float: left;
		font-size: 12px;
		color: #999999;
		text-align: center;
		margin-top: 5%;
	}
	.records li a::before{
		content: '';
		width: 25px;
		height: 32.5px;
		display: block;
		background: url(../../assets/img/icon.png) no-repeat;
		background-size: 325px;
		background-position: -171px -54px;
		margin: 5px auto;
	}
</style>