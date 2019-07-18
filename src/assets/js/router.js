import VueRouter from 'vue-router'
import logoheader from '../../components/other/logoheader.vue'
import txtheader from '../../components/other/txtheader.vue'
import index from '../../components/index/index.vue'
import search from '../../components/index/search.vue'
import update from '../../components/index/update.vue'
import ranking from '../../components/index/ranking.vue'
import my from '../../components/index/my.vue'
import bookshelf from '../../components/index/bookshelf.vue'
import login from '../../components/other/login.vue'
import register from '../../components/other/register.vue'
import zhenhunjie from '../../components/index/zhenhunjie.vue'
import history from '../../components/index/history.vue'
import commentForm from '../../components/other/commentForm.vue'
import recharge from '../../components/other/recharge.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:logoheader,
			redirect:'/index',
			children:[
				{
					path:'/index',component:index
				},
				{
					path:'/login',component:login
				}
			]
		},
		{
			path:'/',
			component:txtheader,
			redirect:'/index',
			children:[
				{
					path:'/search',component:search
				},
				{
					path:'/update',component:update
				},
				{
					path:'/ranking',component:ranking
				},
				{
					path:'/my',component:my
				},
				{
					path:'/bookshelf',component:bookshelf
				},
				{
					path:'/history',component:history
				},
				{
					path:'/zhenhunjie',component:zhenhunjie,
					name:'routerTo'
				},
				{
					path:'/commentForm',component:commentForm
					
				},
				{
					path:'/register',component:register
				},
				{
					path:'/recharge',component:recharge
				}
			]
		}
	]
})