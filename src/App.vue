<template>
	<div id="app" class="app">
		<transition 
			name="router"  
			mode='out-in'
		>
			<router-view class="app-main"/>
		</transition>	
	</div>
</template>
<style lang="scss">
	@import 'assets/styles/pages/index.scss';
	@include b(app) {
		background-color: #fff;
		/* 网站主题内容 */
		@include b(app-main) {
		    padding: {
		    	left: 0.4rem;
		    	right: 0.4rem;
		    }  
		}
	}
</style>
