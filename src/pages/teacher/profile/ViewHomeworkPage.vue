
<template>
	<div class="profile-account-advise">
		<dx-header is-close></dx-header>
		<div class="profile-account-advise--title">作业情况</div>
		<div class="homeworks">
			<dx-cell-item v-for="item in list" :key="item.id">
				<template slot="left">
					<p class="name">{{item.name}}</p>
					<p class="cont">{{item.result}}</p>
				</template>
			</dx-cell-item>
		</div>	
	</div>
</template>
<script>
	import papi from 'api/periodApi.js'
	import DxHeader from '../../common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	export default {
		components: {
			DxHeader, ButtonFooter
		},
		data() {
			return {
				list: [],
				periodId: this.$route.params.id
			}
		},
		mounted() {
			papi.viewHomeworks(this.periodId).then(r => {
				if (r.data) {
					this.list = r.data
				}
			})
		},
		methods: {
		}
	}
</script>
<style scoped lang="scss">
	@include b(profile-account-advise) {
		padding: 0.33rem 0.37rem 0;
		color: #484848;
		font-size: 0.3rem;
		@include m(title) {
				text-align: left;
				font-size: 0.48rem;
			//  margin-top: 0.64rem;
		}
		.homeworks{
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			.name{
				font-size: 0.34rem;
    		color: #484848;
			}
			.cont{
				margin-top: 0.21rem;
				font-size: 0.34rem;
				color: #57B8D7;
			}
		}
	}  
</style>