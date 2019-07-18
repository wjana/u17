<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body{
	max-width: 750px;
	height: auto;
	margin: 0 auto;
}
#app {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-align: center;
  	color: #2c3e50;
  	width: 100%;
	height: auto;
}
.padding{
	padding: 0 13.8px;
	box-sizing: border-box;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a{
	color: #333;
	text-decoration: none;
}
.mint-swipe-items-wrap{
	padding-bottom: 64.4%;
}
.mint-swipe-indicator{
	background: #d7d3d3;
	opacity: 0.5;
}
.mint-swipe-indicators .is-active{
	background: url(./assets/img/diamond.png) no-repeat;
	background-size: 4.26vw;
	background-position: -1.1vw;
	opacity: 1;
}
</style>
