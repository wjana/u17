<template>
	<main>
		<ul class="bNav">
			<li class="active"><router-link to="/bookshelf">收藏</router-link></li>
			<li><router-link to="/history">历史</router-link></li>
			<li class="choose" @click="bookchange()" v-bind:class="bg">
			</li>
		</ul>
		<ul class="clist">
			<li v-for="(item,index) in storeList">
				<img :src="item.src"/>
				<p>{{item.name}}</p>
				<p>{{item.rate}}</p>
				<em @click="choose(index)" v-if="show" v-bind:class="cover"></em>
			</li>
			<div class="btns" v-show="show">
				<div class="all" @click="all()">全选</div>
				<div class="del" @click="del()">删除</div>
			</div>
		</ul>
	</main>
</template>

<script>
	export const msgBook='书架'
	export default{
		data(){
			return{
				storeList:[],
				bg:'bg1',
				show:false,
				arr:[],
				cover:''
			}
		},
		methods:{
			bookchange(){
				if(this.bg=="bg1"){
					this.bg="bg2"
					this.show=true
					var c = document.getElementsByClassName('clist')[0]
					c.style.marginBottom='60px'
					this.cover="cover1"
				}else{
					this.bg="bg1"
					this.show=false
					this.arr=[]
					var c = document.getElementsByClassName('clist')[0]
					c.style.marginBottom=''
					this.cover=""
				}
			},
			choose(a){
				this.cover="cover1"
				var em = document.getElementsByTagName('em')[a]
				
				if(this.arr.indexOf(a)===-1){
					this.arr.push(a)
					em.style.background="url(./src/assets/img/choose2.png) no-repeat"
					em.style.backgroundSize="104% auto"
				}else{
					this.arr.splice(this.arr.indexOf(a),1)
					em.style.background="url(./src/assets/img/choose1.png) no-repeat"
					em.style.backgroundSize="104% auto"
				}
			},
			all(){
				this.arr=this.storeList
				var em = document.getElementsByTagName('em')
				for(var i=0;i<em.length;i++){
					em[i].style.background="url(./src/assets/img/choose2.png) no-repeat"
					em[i].style.backgroundSize="104% auto"
				}
			},
			del(){
				if(this.arr.length==0){
					this.$toast({
						message: '请选择要删除的内容！',
						position: 'center',
						duration: 1500
					});
				}
				for(var i=0;i<this.arr.length;i++){
					this.storeList.splice(this.arr[i],1)
				}
				this.arr.splice(0,this.arr.length)
				var em = document.getElementsByTagName('em')
				for(var i=0;i<em.length;i++){
					em[i].style.background="url(./src/assets/img/choose1.png) no-repeat"
					em[i].style.backgroundSize="104% auto"
				}
			}
		},
		mounted(){
			document.onscroll=null;
			document.documentElement.scrollTop = 0;
			
			this.$http.get('./data/bookshelf.json')
		    .then((res)=>{
		     	this.storeList=res.data.storeList;
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
	.bNav .choose{
		width: 27px;
		height: 27px;
		background: url(../../assets/img/icon.png) no-repeat;
		background-size: 325px;
		position: absolute;
		right: 8px;
		top: 20%;
	}
	.bNav .bg1{
		background-position: 3px -59px;
	}
	.bNav .bg2{
		background-position: -42px -59px;
	}
	.clist{
		padding: 54px 6px 6px 6px;
		box-sizing: border-box;
		text-align: left;
		/*margin-bottom: 60px;*/
	}
	.clist li{
		width: 29%;
		margin: 0 2% 9px 2%;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.1);
		background-color: white;
		padding-bottom: 5px;
		position: relative;
	}
	.clist li img{
		width: 100%;
	}
	.clist li p{
		text-align: center;
		font-size: 14px;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
	}
	.clist li p:last-child{
		font-size: 13px;
		color: #999999;
	}
	em{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
	}
	.cover1{
		background: url(../../assets/img/choose1.png) no-repeat;
		background-size: 104% auto;
	}
	.cover2{
		background: url(../../assets/img/choose2.png) no-repeat;
		background-size: 104% auto;
	}
	.btns{
		width: 100%;
		background-color: white;
		border-bottom: 1px solid #B3B3B3;
		border-top: 1px solid #B3B3B3;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.btns>div{
		width: 49%;
		display: inline-block;
		text-align: center;
		line-height: 60px;
	}
	.btns>div::before{
		content: '';
		width: 22px;
		height: 21px;
		display: inline-block;
		vertical-align: middle;
	}
	.all::before{
		background: url(../../assets/img/choose3.png) no-repeat center center;
		background-size: 17px;
	}
	.del::before{
		background: url(../../assets/img/delete.png) no-repeat center center;
		background-size: 17px;
	}
	.all{
		border-right: 1px solid #B3B3B3;
	}
</style>