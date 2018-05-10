<template>
	<transition 
		name="router"  
		mode='out-in'
	>
		<router-view id="app"/>
	</transition>	
</template>
<style lang="scss">
	@import 'assets/styles/pages/index.scss';
</style>
