import DxFormItem from './dx-form-item.vue'
import DxForm from './dx-form.vue'
import DXInput from './dx-input.vue'
import DxButton from './dx-button.vue'
import DxUl from './dx-ul.vue'
import DxCheckbox from './dx-checkbox.vue'
import DxCheckboxGroup from './dx-checkbox-group.vue'

const components = [
	DxFormItem,
	DxForm,
	DXInput,
	DxButton,
	DxUl,
	DxCheckbox,
	DxCheckboxGroup
]

const install = function(Vue) {
	// 判断是否已经注册，如果已经注册则返回
	if (install.installed) return
	components.map(component => {
		Vue.component(component.name, component)
	})
	install.installed = true
}
export default install
