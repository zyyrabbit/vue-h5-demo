import Store from 'store'
import VueRouter from 'vue-router'
// 方案2---路由懒加载
 const Index = () => import('pages/busi/IndexPage.vue')
 const Login = () => import('pages/LoginPage.vue')
 const Register = () => import('pages/RegisterPage.vue')
 const GetPassword = () => import('pages/GetPasswordPage.vue')
 const pubRoutes = [
		{ path: '/', component: Index, hidden: true },
		{ path: '/login', component: Login, hidden: true },
		{ path: '/reg', component: Register, hidden: true },
		{ path: '/getpwd', component: GetPassword, hidden: true }
	]
export default new VueRouter({
	scrollBehavior: () => ({ y: 0 }),
	routes: pubRoutes
})
