<template>
	<label class="dx-input">
		<span 
			class="dx-input-label-text dx-input-label-text-left"
			v-if="$slots.default"
		>
			<slot></slot>
		</span>
		<input 
			v-model="model" 
			:style="inputStyle"
			:class="[inputClass]"
			class="dx-input-origin-input" 
			:disabled="disabled"   
			:type="originType" 
			:placeholder="inputPlaceholder"   
			@focus="handleFoucs" 
			@blur="handleBlur"
		/>
		<span 
			class="dx-input-label-text dx-input-label-text-right"
			v-if="$slots.leftText"
		>
			<slot name="leftText"></slot>
		</span>
	</label>
</template>
<script>
	// 用于简单的非父子组件之间的通信
    import emitter from './mixins/emitter.js'
	export default{
		componentName: 'DxInput',
		name: 'DxInput',
		mixins: [emitter],
		props: {
			value: {},
			placeholder: {
				type: String,
				default: ''
			},
			originType: String,
			disabled: {
				type: Boolean,
				default: false
			},
			inputStyle: Object,
			inputClass: String
		},
		data() {
			return {
				inputPlaceholder: this.placeholder
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
			handleBlur(event) {
				this.inputPlaceholder = this.placeholder
				this.$emit('blur', event)
				this.dispatch('DxFormItem', 'dx-form-blur', [this.value])
			},
			handleFoucs(event) {
				this.inputPlaceholder = ''
				this.$emit('foucs', event)
				this.dispatch('DxFormItem', 'dx-form-focus', [])
			}
		}
	}
</script>
<style lang="scss">
	/*整体样式*/
	.dx-input{
		color: #484848;
		font-size: 0.36rem;
		position: relative;
	}
	/* 以下设置为输入框最大长度即与父元素宽度一样 */
	.dx-input-origin-input{
		width: 100%;
		padding-left: 1.2rem;
		padding-bottom: 0.54rem;
		border: none;
		border-bottom: 1px solid #D3D3D3;
		line-height: 0;
		font-size: 0.36rem;
		// 修复ios中input自动圆角的问题
		-webkit-appearance:none;
		border-radius: 0;
		@include placeholder {
			color: #D3D3D3;
		}
	}
	.dx-input-label-text {
		display: inline-block;
		position: absolute;
		top: 0;
		z-index: 1;
	}
	.dx-input-label-text-left{
		left: 0; 
	}
	.dx-input-label-text-right{
		right: 0;
	}
	
	/* .dx-input{
		color: #484848;
		font-size: 0.36rem;
		width: 100%;
		padding-bottom: 0.54rem;
		border-bottom: 1px solid #D3D3D3;
		display: flex;
	}
	.dx-input-label-text-left{
		width: 3.18rem;
	}
	.dx-input-origin-input{
		flex: 1;
		border: none;
		font-size: 0.36rem;
		@include placeholder {
			color: #D3D3D3;
		}
	} */
		// 登录注册输入框
	.dx-input-with-title{
		padding-left: 1.8rem!important;
	}
</style>
