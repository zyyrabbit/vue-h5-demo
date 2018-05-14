import Store from 'store'
import VueRouter from 'vue-router'
// 方案2---路由懒加载
 const Index = () => import('pages/common/IndexPage.vue')
 const Login = () => import('pages/LoginPage.vue')
 const Register = () => import('pages/RegisterPage.vue')
 const GetPassword = () => import('pages/GetPasswordPage.vue')
 // 上课页面组
 const BillingDetailPage = () => import('pages/common/course/BillingDetailPage.vue')
 const JudgePage = () => import('pages/common/course/JudgePage.vue')
 // 消息页面组
 const SystemMessagePage = () => import('pages/common/message/SystemMessagePage.vue')
 const ChatPage = () => import('pages/common/message/ChatPage.vue')
 const SearchTeacherPage = () => import('pages/common/message/SearchTeacherPage.vue')

 const pubRoutes = [
		{ path: '/', component: Index, hidden: true },
		{ path: 'login', component: Login, hidden: true },
		{ path: 'reg', component: Register, hidden: true },
		{ path: 'getpwd', component: GetPassword, hidden: true },
		// path加'/'为相对根路径--课程页面
		{ path: '/course/bill', component: BillingDetailPage },
		{ path: '/course/judge', component: JudgePage },
	    // path加'/'为相对根路径--消息页面
		{ path: '/message/system', component: SystemMessagePage },
		{ path: '/message/chat', component: ChatPage },
		{ path: '/message/query', component: SearchTeacherPage }
	]
export default new VueRouter({
	scrollBehavior: () => ({ y: 0 }),
	routes: pubRoutes
})
