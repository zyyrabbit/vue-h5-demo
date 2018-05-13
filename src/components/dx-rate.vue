<template>
	<ul class="dx-rate clearfix">
      	<li 
         v-for="index in 5"
         :key="index"
         :class="[rateClass, level > index ? selectRateClass : '']"
         @click="select(index)"
         class="dx-rate-item"
      	>
      	</li>
   </ul>
</template>
<script>
export default {
    name: 'DxRate',
    componentName: 'DxRate',
    props: {
       value: {},
       rateClass: String,
       selectRateClass: String
    },
    data() {
    	return {
    		level: 0
    	}
    },
   	computed: {
   		model: {
   			get() {
   				return this.value
   			},
   			set(val) {
   				this.$emit('input', val)
   			}
   		}
   	},
   	methods: {
   		select(index) {
   			this.level = index + 1
   			this.model = this.level
   		}
   	}
}
</script>
<style>
.clearfix {
	clear: both;
	_display: inline;
}
.dx-rate-item {
	float: left;
	width: 0.88rem;
	height: 0.88rem;
}
</style>