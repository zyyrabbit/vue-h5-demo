import VueRouter from 'vue-router'
// 方案2---路由懒加载
const Login = () => import('pages/LoginPage.vue')
const Register = () => import('pages/RegisterPage.vue')
const GetPassword = () => import('pages/GetPasswordPage.vue')
/* 家长 */
// 主页面
const HomePage = () => import('pages/parent/HomePage.vue')
const CoursePage = () => import('pages/parent/CoursePage.vue')
const MessagePage = () => import('pages/parent/MessagePage.vue')
const MePage = () => import('pages/parent/MePage.vue')
//  首页
const CourseDetailPage = () => import('pages/parent/home/CourseDetailPage.vue')
const JoinLearningPage = () => import('pages/parent/home/JoinLearningPage.vue')
const LessonPeriodPage = () => import('pages/parent/home/LessonPeriodPage.vue')
const PayMethodPage = () => import('pages/parent/home/PayMethodPage.vue')
// 上课页面组
const BillingDetailPage = () => import('pages/parent/course/BillingDetailPage.vue')
const JudgePage = () => import('pages/parent/course/JudgePage.vue')
const EvalPage = () => import('pages/parent/course/evaluatePage.vue')
// 消息页面组
const SystemMessagePage = () => import('pages/parent/message/SystemMessagePage.vue')
const ChatPage = () => import('pages/parent/message/ChatPage.vue')
const SearchTeacherPage = () => import('pages/parent/message/SearchTeacherPage.vue')
// 个人账户
const AccountSettingPage = () => import('pages/parent/profile/AccountSettingPage.vue')
const PwdModPage = () => import('pages/parent/profile/PwdModPage.vue')
const TelephoneModPage = () => import('pages/parent/profile/TelephoneModPage.vue')
const InvitingFriendsPage = () => import('pages/parent/profile/InvitingFriendsPage.vue')
const AdvisePage = () => import('pages/parent/profile/AdvisePage.vue')
const SignInPage = () => import('pages/parent/profile/SignInPage.vue')
const IntegralMallPage = () => import('pages/parent/profile/IntegralMallPage.vue')
const ExchangeRecordPage = () => import('pages/parent/profile/ExchangeRecordPage.vue')
const DiscountDetailPage = () => import('pages/parent/profile/DiscountDetailPage.vue')
const EditPage = () => import('pages/parent/profile/EditPage.vue')
// 场地页面
const PlacePage = () => import('pages/teacher/place/PlacePage.vue')
const SelectRegionPage = () => import('pages/teacher/place/SelectRegionPage.vue')
const PlaceDetlPage = () => import('pages/teacher/place/PlaceDetlPage.vue')
const BookDetlPage = () => import('pages/teacher/place/BookDetlPage.vue')
const BookSuccPage = () => import('pages/teacher/place/BookSuccessPage.vue')
const RelateCoursePage = () => import('pages/teacher/place/RelateCoursePage.vue')

const pubRoutes = [
		{ path: '/', component: HomePage, hidden: true },
		{ path: '/login', component: Login, hidden: true },
		{ path: '/reg', component: Register, hidden: true },
		{ path: '/getpwd', component: GetPassword, hidden: true },
		{
			path: '/home',
			component: HomePage,
			children: [
				{ path: 'courseDetail', component: CourseDetailPage, hidden: true },
				{ path: 'join', component: JoinLearningPage, hidden: true },
				{ path: 'period', component: LessonPeriodPage, hidden: true },
				{ path: 'pay', component: PayMethodPage, hidden: true }
			]
		},
		{
			path: '/course',
			component: CoursePage,
			children: [
				// path加'/'为相对根路径--课程页面
				{ path: 'bill', component: BillingDetailPage, hidden: true },
				{ path: 'judge', component: JudgePage },
				{ path: 'evaluate', component: EvalPage }
			]
		},
		{
			path: '/profile',
			component: MePage,
			children: [
				{ path: 'account', component: AccountSettingPage, hidden: true },
				{ path: 'pwdMod', component: PwdModPage, hidden: true },
				{ path: 'phoneMod', component: TelephoneModPage, hidden: true },
				{ path: 'invitefriends', component: InvitingFriendsPage, hidden: true },
				{ path: 'advise', component: AdvisePage, hidden: true },
				{ path: 'sign', component: SignInPage, hidden: true },
				{ path: 'integralMall', component: IntegralMallPage, hidden: true },
				{ path: 'exhRecord', component: ExchangeRecordPage, hidden: true },
				{ path: 'discount', component: DiscountDetailPage, hidden: true },
				{ path: 'edit', component: EditPage, hidden: true }
			]
		},
		{
			path: '/message',
			component: MessagePage,
			children: [
				// path加'/'为相对根路径--消息页面
				{ path: 'system', component: SystemMessagePage, hidden: true },
				{ path: 'chat', component: ChatPage, hidden: true },
				{ path: 'query', component: SearchTeacherPage, hidden: true }
			]
		},
		{
			path: '/place',
			component: PlacePage,
			children: [
				{ path: 'select', component: SelectRegionPage, hidden: true },
				{ path: 'detail', component: PlaceDetlPage, hidden: true },
				{ path: 'book', component: BookDetlPage, hidden: true },
				{ path: 'success', component: BookSuccPage, hidden: true },
				{ path: 'relate', component: RelateCoursePage, hidden: true }
			]
		}
	]
export default new VueRouter({
	scrollBehavior: () => ({ y: 0 }),
	routes: pubRoutes
})
