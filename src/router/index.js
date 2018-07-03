import Store from 'store'
import VueRouter from 'vue-router'

const Login = () => import('pages/LoginPage.vue')
const Register = () => import('pages/RegisterPage.vue')
const GetPassword = () => import('pages/GetPasswordPage.vue')
// 公共主页面
const HomePage = () => import('pages/share/HomePage.vue')
const MessagePage = () => import('pages/share/MessagePage.vue')
const MePage = () => import('pages/share/MePage.vue')
// 首页
const CourseDetailPage = () => import('pages/share/home/courseDetail/CourseDetailPage.vue')
const JoinLearningPage = () => import('pages/share/home/courseDetail/JoinLearningPage.vue')
const LessonPeriodPage = () => import('pages/share/home/courseDetail/LessonPeriodPage.vue')
const PayMethodPage = () => import('pages/share/home/courseDetail/PayMethodPage.vue')
const EditStudentPage = () => import('pages/share/home/courseDetail/EditStudentPage.vue')
// const AddStudentPage = () => import('pages/parent/home/courseDetail/AddStudentPage.vue')
const CourseJudgePage = () => import('pages/share/home/courseDetail/CourseJudgePage.vue')
const BookSuccessPage = () => import('pages/share/home/courseDetail/BookSuccessPage.vue')

const ContractCourseDetailPage = () => import('pages/share/home/contractCourseDetail/ContractCourseDetailPage.vue')
const ContractJoinLearningPage = () => import('pages/share/home/contractCourseDetail/ContractJoinLearningPage.vue')
const ContractLessonPeriodPage = () => import('pages/share/home/contractCourseDetail/ContractLessonPeriodPage.vue')
const SearchPage = () => import('pages/share/home/SearchPage.vue')
// const SearchResultPage = () => import('pages/share/home/SearchResultPage.vue')
const TeacherDetailPage = () => import('pages/share/home/TeacherDetailPage.vue')
// 消息页面组
const SystemMessagePage = () => import('pages/share/message/SystemMessagePage.vue')
const ChatPage = () => import('pages/share/message/ChatPage.vue')
const SearchTeacherPage = () => import('pages/share/message/SearchTeacherPage.vue')
// 个人
const AccountSettingPage = () => import('pages/share/profile/setting/AccountSettingPage.vue')
const PwdModPage = () => import('pages/share/profile/setting/PwdModPage.vue')
const TelephoneModPage = () => import('pages/share/profile/setting/TelephoneModPage.vue')
const EditPage = () => import('pages/share/profile/EditPage.vue')
const SignInPage = () => import('pages/share/profile/integral/SignInPage.vue')

/* 家长页面组 */
// 家长tabs主页面
const CoursePage = () => import('pages/parent/CoursePage.vue')
// 上课页面组
const BillingDetailPage = () => import('pages/parent/course/BillingDetailPage.vue')
const JudgePage = () => import('pages/parent/course/JudgePage.vue')
const EvalPage = () => import('pages/parent/course/evaluatePage.vue')
// 个人账户
const InvitingFriendsPage = () => import('pages/parent/profile/InvitingFriendsPage.vue')
const IntegralMallPage = () => import('pages/parent/profile/integral/IntegralMallPage.vue')
const ExchangeRecordPage = () => import('pages/parent/profile/integral/ExchangeRecordPage.vue')
const DiscountDetailPage = () => import('pages/parent/profile/integral/DiscountDetailPage.vue')
const AdvisePage = () => import('pages/parent/profile/AdvisePage.vue')

/* 老师页面组 */
// 场地页面
const PlacePage = () => import('pages/teacher/place/PlacePage.vue')
const SelectRegionPage = () => import('pages/teacher/place/SelectRegionPage.vue')
const PlaceDetlPage = () => import('pages/teacher/place/PlaceDetlPage.vue')
const BookDetlPage = () => import('pages/teacher/place/BookDetlPage.vue')
const BookSuccPage = () => import('pages/teacher/place/BookSuccessPage.vue')
const RelateCoursePage = () => import('pages/teacher/place/RelateCoursePage.vue')
// 个人账户（老师）
const TeacherCoursePage = () => import('pages/teacher/profile/CoursePage.vue')
const JudgeStudentPage = () => import('pages/teacher/profile/JudgeStudentPage.vue')
const DoJudgePage = () => import('pages/teacher/profile/DoJudgePage.vue')
const MySutdentPage = () => import('pages/teacher/profile/MystudentPage.vue')
const ChangePlacePage = () => import('pages/teacher/profile/ChangePlacePage.vue')
const TeacherPlacePage = () => import('pages/teacher/profile/TeacherPlacePage.vue')
const TeacherAllCoursePage = () => import('pages/teacher/profile/TeacherAllCoursePage.vue')
const routes = [
		{ path: '/', component: HomePage, hidden: true },
		{ path: '/login', name: 'login', component: Login, hidden: true },
		{ path: '/reg', name: 'reg', component: Register, hidden: true },
		{ path: '/getpwd', name: 'getpwd', component: GetPassword, hidden: true },
		{ path: '/home', component: HomePage, hidden: true },
		// 课程详情
		{
			path: '/courseDetail/:id',
			component: CourseDetailPage,
			children: [
				{ path: 'judge', component: CourseJudgePage, hidden: true }
			]
		},
		{
			path: '/join',
			component: JoinLearningPage,
			children: [
				{ path: 'period', component: LessonPeriodPage, hidden: true },
				{ path: 'pay', component: PayMethodPage, hidden: true },
				{ path: 'edit', component: EditStudentPage, hidden: true },
				{ path: 'bookSuccess', component: BookSuccessPage, hidden: true }
			]
		},
		{
			path: '/contDetail',
			component: ContractCourseDetailPage,
			chidren: [
				{ path: 'contPeriod', component: ContractLessonPeriodPage, hidden: true },
				{ path: 'contJoin', component: ContractJoinLearningPage, hidden: true }
			]
		},
		// 首页搜索页
		{ path: '/search', component: SearchPage, hidden: true },
		// 首页搜索结果页
		// { path: '/searchResult', component: SearchResultPage, hidden: true },
		// 首页教师详情
		{ path: '/teacherDetail/:id', component: TeacherDetailPage, hidden: true },
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
				{ path: 'invitefriends', component: InvitingFriendsPage, hidden: true },
				{ path: 'advise', component: AdvisePage, hidden: true },
				{ path: 'edit', component: EditPage, hidden: true }
			]
		},
		{ path: '/account', component: AccountSettingPage, hidden: true },
		{ path: '/pwdMod', component: PwdModPage, hidden: true },
		{ path: '/phoneMod', component: TelephoneModPage, hidden: true },
		{ path: '/sign', component: SignInPage, hidden: true },
		{
			path: '/integralMall',
			component: IntegralMallPage,
			children: [
				{ path: 'exhRecord', component: ExchangeRecordPage, hidden: true },
				{ path: 'discount', component: DiscountDetailPage, hidden: true }
			]
		},
		{
			path: '/message',
			component: MessagePage,
			children: [
				// path加'/'为相对根路径--消息页面
				{ path: 'query', component: SearchTeacherPage, hidden: true },
				{ path: '/system', component: SystemMessagePage, hidden: true },
				{ path: '/chat', component: ChatPage, hidden: true }
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
		},
		{
			path: '/teacher/course',
			component: TeacherCoursePage,
			children: [
				{ path: 'students/:id', component: MySutdentPage, hidden: true },
				{ path: 'changePla/:id', component: ChangePlacePage, hidden: true },
				{ path: 'place', component: TeacherPlacePage, hidden: true },
				{ path: 'all', component: TeacherAllCoursePage, hidden: true }
			]
		},
		{
			path: '/teacher/judgeStu/:id',
			component: JudgeStudentPage,
			children: [
				{ path: 'DojudgeStu', component: DoJudgePage, hidden: true }
			]
		}
	]
const router = new VueRouter({
	/* scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}, */
	routes: routes
})
const allowRouteName = ['login', 'reg', 'getpwd']
router.beforeEach((to, from, next) => {
	let login = Store.state.login
	if (!login && allowRouteName.indexOf(to.name) === -1) {
		next({ path: '/login' })
	} else {
		next()
	}
})
export default router
