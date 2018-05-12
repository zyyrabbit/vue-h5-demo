<template>
	<div class="dx-checkbox-group">
		<input type="checkbox"/> 
	</div>
</template>
<script>
export default {
    name: 'DxCheckboxGroup',
    componentName: 'DxCheckboxGroup',
    props: {
        value: {}
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
        handleClick: function(evt) {
            this.$emit('dx-button-click', evt)
        }
    }
}
</script>
<style>

</style>