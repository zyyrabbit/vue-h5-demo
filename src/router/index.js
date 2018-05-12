import Store from 'store'
import VueRouter from 'vue-router'
// 方案2---路由懒加载
 const Index = () => import('pages/common/IndexPage.vue')
 const BillingDetailPage = () => import('pages/common/course/BillingDetailPage.vue')
 const JudgePage = () => import('pages/common/course/JudgePage.vue')
 const Login = () => import('pages/LoginPage.vue')
 const Register = () => import('pages/RegisterPage.vue')
 const GetPassword = () => import('pages/GetPasswordPage.vue')

 const pubRoutes = [
		{ path: '/', component: Index, hidden: true },
		{ path: 'login', component: Login, hidden: true },
		{ path: 'reg', component: Register, hidden: true },
		{ path: 'getpwd', component: GetPassword, hidden: true },
		// path加'/'为相对根路径
		{ path: '/course/bill', component: BillingDetailPage },
		{ path: '/course/judge', component: JudgePage }
	]
export default new VueRouter({
	scrollBehavior: () => ({ y: 0 }),
	routes: pubRoutes
})
