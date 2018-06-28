import DxFormItem from './dx-form-item.vue'
import DxForm from './dx-form.vue'
import DXInput from './dx-input.vue'
import DxButton from './dx-button.vue'
import DxUl from './dx-ul.vue'
import DxCheckbox from './dx-checkbox.vue'
import DxCheckboxGroup from './dx-checkbox-group.vue'
import DxRate from './dx-rate.vue'
import DxItem from './dx-item.vue'
import DxItemList from './dx-item-list.vue'
import DxCalender from './calendar/dx-calendar.vue'
import DxTabs from './dx-tabs.vue'
import DxCellItem from './dx-cell-item.vue'
import DxRadio from './dx-radio.vue'
import DxStar from './dx-star.vue'
import DxComment from './dx-comment.vue'
import DxTag from './dx-tag.vue'
import DxVc from './dx-vc.vue'
const components = [
	DxFormItem,
	DxForm,
	DXInput,
	DxButton,
	DxUl,
	DxCheckbox,
	DxCheckboxGroup,
	DxRate,
	DxItem,
	DxItemList,
	DxCalender,
	DxTabs,
	DxCellItem,
	DxRadio,
	DxStar,
	DxComment,
	DxTag,
	DxVc
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
