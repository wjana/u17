<template>
	<main>
		<div class="content">
			<textarea placeholder="快说两句话吧n(*≧▽≦*)n"></textarea>
		</div>
		<p @click="send()">发表评论</p>
	</main>
</template>

<script>
	export const msgCom='发表评论'
	
	export default{
		methods:{
			send(){
				var a = document.getElementsByTagName('textarea')[0]
		    	var time = new Date();
		    	if(a.value==''){
		    		this.$toast({
						message: '内容不能为空(*^▽^*)',
						position: 'center',
						duration: 5000
					});
		    	}else{
		    		this.$router.push({
		    			name:`routerTo`,
		    			params:{
		    				com:a.value
		    			}
		    		})
		    	}
		    }
		},
		mounted(){
			document.onscroll=null;
		}
	} 
</script>

<style scoped="">
	textarea{
		width: 100%;
		height: 160px;
		outline: none;
		font-size: 15px;
		padding: 15px;
		color: #444444;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid #b3b3b3;
	}
	p{
		width: 71%;
		line-height: 45px;
		background-color: #1DDD8F;
		color: white;
		border-radius: 50px;
		font-size: 16px;
		margin: 15px auto 0 auto;
	}
</style>