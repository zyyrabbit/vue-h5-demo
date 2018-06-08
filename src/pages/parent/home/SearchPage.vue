<template>
    <div class="home-search">
    	<dx-header></dx-header>
    	<div class="home-search--input">
    		<dx-input
    			v-model="searchContent"
    			:inputStyle="inputStyle"
				placeholder="试试看搜索“英语”"
				originType="text"
    		>
    			<span class="home-search--input-left"></span>
    		</dx-input>
    	</div>
    	<ul class="home-search__content">
    		<li 
    			v-for="index in 3" 
    			:key="index"
    			class="home-search__content-item"
    			@click="goNext('/home/searchResult')"
    		>
    			<dx-item alignItem="top">
    				<div slot="left" class="home-search__content-item--desc">
		    			<p>我的第一个英语小对话</p>
		    			<p>
		    				<span class="home-search__content-item--icon"></span>
		    				<span>鲁彬</span>
		    				<span>儿童心理专家</span>
		    			</p>
	    			</div>
		    		<div slot="right" class="home-search__content-item--number">
		    			356人参加过
		    		</div>
    			</dx-item>
    		</li>
    	</ul>
   	</div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	export default {
		mixins: [mixin],
		components: {
			DxHeader
		},
		data() {
			return {
				searchContent: '',
				inputStyle: {
					'padding-left': '0.1rem',
					'padding-bottom': '0.38rem',
					'font-size': '0.48rem'
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(home-search) {
		font-size: 0.36rem;
		padding: 0.31rem 0.4rem 0;
		@include m(input) {
			margin-top: 0.67rem;
			font-size: 0.48rem;
		}
		@include m(input-left) {
			display: inline-block;
			height: 0.46rem;
			border: 0.03rem solid #369CC7;
		}
		@include e(content-item) {
			padding: 0.54rem 0;
			font-size: 0.36rem;
			color: #484848;
			&:not(:last-child) {
				border-bottom: 2px solid #EBEBEB;
			}
			@include m(desc) {
				max-width: 4.33rem;
				>p {
					margin-bottom: 0.27rem;
				}
				p:last-child {
					display: flex;
					align-items: center;
					font-size: 0.22rem;
					/* 头像 */
					>span:nth-child(1) {
						display: inline-block;
						width: 0.32rem;
						height: 0.32rem;
						border-radius: 50%;
						background-color: red;
					}
					>span:nth-child(2) {
						margin: 0 0.12rem;
					}
				}
			}
			@include m(number) { 
				font-size: 0.3rem;
				color: #57B8D7;
			}
		}
	}

</style>