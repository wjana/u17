<template>
	<main>
		<ul class="updateNav">
			<li v-for="(item,index) in dateList" @click="change(index)" v-bind:class="{green:num==index}">{{item}}</li>
		</ul>
		<section>
			<ul v-bind:class="{one:msg=='0'}">
				<li v-for="(item,index) in oneList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='1'}">
				<li v-for="(item,index) in twoList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='2'}">
				<li v-for="(item,index) in threeList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='3'}">
				<li v-for="(item,index) in fourList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='4'}">
				<li v-for="(item,index) in fiveList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='5'}">
				<li v-for="(item,index) in sixList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
			<ul v-bind:class="{one:msg=='6'}">
				<li v-for="(item,index) in sevenList">
					<router-link to="/update">
						<img :src="item.src"/>
						<div class="con r">
							<h3>{{item.name}}</h3>
							<p>{{item.author}}</p>
							<p>{{item.tag}}</p>
							<p>{{item.play}}</p>
						</div>
					</router-link>
				</li>
				<button @click="changeMore(num)">点击加载更多</button>
			</ul>
		</section>
	</main>	
</template>

<script>
	export const msgUpdate='更新'
	
	export default{
		data(){
			return{
				dateList:[],
				className:'green',
				num:6,
				show:true,
				msg:6,
				oneList:[],
				twoList:[],
				threeList:[],
				fourList:[],
				fiveList:[],
				sixList:[],
				sevenList:[]
			}
		},
		methods:{
			change(index){
				this.num=index;
				if(this.className=='green'){
					this.className=''
				}else{
					this.className='green'
				}
				document.documentElement.scrollTop = document.body.scrollTop = 0;
				this.msg=this.num
			},
			changeMore(num){
				this.num--;
				if(this.num<0){
					this.num=6
				}
				this.msg--;
				if(this.msg<0){
					this.msg=6
				}
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			}
		},
		mounted(){
			document.onscroll=null;
			
			this.$http.get('./data/update.json')
		    .then((res)=>{
		     	this.oneList=res.data.oneList;
		      	this.twoList=res.data.twoList;
		      	this.threeList=res.data.threeList;
		      	this.fourList=res.data.fourList;
		      	this.fiveList=res.data.fiveList;
		      	this.sixList=res.data.sixList;
		      	this.sevenList=res.data.sevenList;
		    })
		    .catch(()=>{
		    
		    })
		    .finally((f)=>{
		    	var newday = new Date();
				var weekday = ['日','一','二','三','四','五','六'];
				var dayNum = newday.getDay();
				var dateList=[]
				for(var i=0;i<7;i++){
					if(i==6){
						weekday[dayNum]='昨日'
					}
					dateList.push(weekday[dayNum])
					dayNum++;
					if(dayNum>6){
						dayNum=0;
					}
				}
				this.dateList=dateList
		    });  
		}
	}
</script>

<style scoped="">
	.updateNav{
		background-color: #F2F2F2;
		padding: 7.5px 0;
		width: 100%;
		max-width: 750px;
		position: fixed;
	}
	.updateNav li{
		width: 14%;
		line-height: 30px;
		color: #999;
		font-size: 14px;
	}
	.green{
		background-color: #dcf0e8;
		color: #1ddd8f !important;
		border-radius: 15px;
	}
	section{
		padding-top: 47px;
	}
	section li{
		box-sizing: border-box;
		width: 100%;
		padding: 5px 8px 8px 8px;
		border-top: 5px solid #F2F2F2;
	}
	section li:first-child{
		border-top: none;
	}
	section img{
		width: 21%;
		float: left;
	}
	section .con{
		width: calc(79% - 10px);
		text-align: left;
		padding-left: 10px;
		line-height: 22px;
		padding-top: 5px;
		box-sizing: border-box;
	}
	.con h3{
		font-weight: normal;
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
	button{
		width: 100%;
		height: 50px;
		background-color: #1DDD8F;
		color: white;
		border: none;
		font-size: 16px;
		outline: none;
	}
	section ul{
		display: none;
	}
	.one{
		display: block;
	}
</style>