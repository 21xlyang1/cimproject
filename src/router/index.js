import VueRouter from "vue-router"
const router = new VueRouter({
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
			children: [{
				path: '',
				components: {
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

router.beforeEach((to, from, next) => {
	console.log(to, from);
	if (to.fullPath === '/ls/login' || to.fullPath === '/ls/register') {
		next();
	} else {


		// 使用 $cookies
		const isLoggedIn = router.app.$cookies.get('isLog')=='true';
		console.log(isLoggedIn)
		if (!isLoggedIn) {
			// 使用 $message
			router.app.$message({
				message: '请先登录或注册',
				type: 'warning',
			});
			router.push('/ls/login');
		} else {
			next();
		}
	}

})

export default router