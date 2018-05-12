<template>
	<label 
		for="dx-checkbox"
		class="dx-checkbox" 
	>
		<input 
			:value="label"
			type="checkbox"
			name="dx-checkbox"
			class="dx-checkbox-origin" 
		/> 
		<slot>{{label}}</slot>
	</label>
</template>
<script>
export default {
    name: 'DxCheckbox',
    componentName: 'DxCheckbox',
    props: {
       label: String
    },
    methods: {
        handleClick: function(evt) {
            this.$emit('dx-button-click', evt)
        }
    }
}
</script>
<style>
.dx-checkbox {
	padding: 0.12rem 0.19rem;
	border-radius: 0.19rem;
	background-color: #93D5F1;
	color: #fff;
}
.dx-checkbox-origin {
	display: none;
}

</style>