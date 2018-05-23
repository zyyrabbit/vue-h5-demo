<template>
	<!-- 两列排列 -->
    <div class="dx-calendar">
    	<div class="dx-calendar-select clearfix">
    		<span class="block--float-left"> < </span>
            <input v-model="month"/>
            <span class="block--float-right"> > </span>
    	</div>
    	<div class="dx-calendar-content">
    		<table class="dx-calendar-content__table" width="100%">
                <thead>
                    <th v-for="weekDay in weekDays">{{weekDay}}</th>
                </thead>
                <tbody>
                    <tr class="dx-calendar-content__blanking"></tr>
                    <tr v-for="row in 5">
                        <td 
                            v-for="column in 7"
                            class="dx-calendar-content__table--td"
                        >
                            <slot :date="store[(row - 1) * 7 + column - 1]" :today="dateStore.day"> 
                                {{ store[(row - 1) * 7 + column - 1] }} 
                            </slot>
                        </td>
                    </tr>
                </tbody>      
            </table>
    	</div>
    </div>
</template>
<script>
    import DateStore from './dateStore.js'
	export default {
		name: 'DxCalendar',
		componentName: 'DxCalendar',
        data() {
            const dateStore = new DateStore()
            return {
                weekDays: ['日', '一', '二', '三', '四', '五', '六'],
                dateStore
            }
        },
        computed: {
            store() {
                return this.dateStore.store
            },
            month() {
                return `${this.dateStore.month}月`
            }
        }
	}
</script>
<style lang="scss">
	.dx-calendar {
        width: 100%;
    }
    // 月份选择器
    .dx-calendar-select {
        padding: 0 0.4rem;
        margin-bottom: 0.51rem;
        text-align: center;
        >input {
            text-align: center;
            border: none;
        }
        >span {
            color: #8DD0EC;
        }
    }
    // 空格
    .dx-calendar-content__blanking {
        height: 0.63rem;
    }
    .dx-calendar-content__table {
        width: 100%;
        border-collapse: collapse;
        >thead {
            background-color: #F5F5F5;
            border-radius: 0.25rem;
            margin-bottom: 0.63rem;
            >th {
                font-weight: normal;
                font-size: 0.3rem;
            }
        }
        // 表格样式
        .dx-calendar-content__table--td {
            text-align: center;
            color: #7E7E7E;
            font-size: 0.3rem;
            &.is-slect {
                border: 1px solid red;
            }
        }
    }
    
</style>