import VueRouter from "vue-router"
export default new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/ls',
			components: {
				one: () => import('@/pages/loginSystem.vue'),
			},
			children: [
				{
					path: 'login',
					components: {
						tow: () => import('@/pages/login.vue'),
					}
				},
				{
					path: 'register',
					components: {
						tow: () => import('@/pages/register.vue')
					}
				}
			]
		}, {
			path: '/',
			components: {
				one: () => import('@/pages/appSystem.vue'),
				tow: () => import('@/pages/mapCamera.vue')
			},
			children:[{
				path:'',
				components:{
					tow: () => import('@/pages/mapCamera.vue')
				}
			}]
		},
		{
			path: '/as',
			components: {
				one: () => import('@/pages/appSystem.vue'),
			},
			children: [
				{
					path: 'mapCamera',
					components: {
						tow: () => import('@/pages/mapCamera.vue')
					}
				},
				{
					path: 'cameraList',
					components: {
						tow: () => import('@/pages/cameraList.vue')
					}
				},
				{
					path: 'cameraShow',
					components: {
						tow: () => import('@/pages/cameraShow.vue')
					}
				},
				{
					path: 'dataStatistics',
					components: {
						tow: () => import('@/pages/dataStatistics.vue')
					}
				},
				{
					path: 'drowningList',
					components: {
						tow: () => import('@/pages/drowningList.vue')
					}
				},
				{
					path: 'oursiderList',
					components: {
						tow: () => import('@/pages/oursiderList.vue')
					}
				},
				{
					path: 'residentManage',
					components: {
						tow: () => import('@/pages/residentManage.vue')
					}
				},
				{
					path: 'violenceList',
					components: {
						tow: () => import('@/pages/violenceList.vue')
					}
				},
			]
		}
	]
})