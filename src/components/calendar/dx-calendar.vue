<template>
	<!-- 两列排列 -->
    <div class="dx-calendar">
    	<div class="dx-calendar-select clearfix">
    		<span 
                class="block--float-left dx-calendar-select-left"
                @click="preMonth()"
            ></span>
            <input 
                v-model="month"
                readonly="readonly" 
            />
            <span 
                class="block--float-right dx-calendar-select-right"
                 @click="nextMonth()"
            ></span>
    	</div>
    	<div class="dx-calendar-content">
    		<table class="dx-calendar-content__table" width="100%">
                <thead>
                    <th v-for="weekDay in weekDays">{{weekDay}}</th>
                </thead>
                <tbody>
                    <tr class="dx-calendar-content__blanking"></tr>
                    <tr 
                        v-for="row in rows"
                        :key="row"
                    >
                        <td 
                            v-for="column in 7"
                            :key="column"
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
        props: {
            size: {
                type: Number,
                default: 42,
                validator: function(value) {
                    return value >= 35
                }
            },
            currentMonth: Boolean
        },
        data() {
            const dateStore = new DateStore({
                    size: this.size,
                    currentMonth: this.currentMonth
                })
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
                return `${this.dateStore.month + 1}月`
            },
            rows() {
                return Math.floor(this.size / 7)
            }
        },
        methods: {
            // 这里month 范围 0-11
            preMonth() {
                let month = this.dateStore.month
                month = month < 1 ? 11 : month - 1
                this.dateStore.setMonth(month)
                this.$emit('month-change', 32)
            },
            nextMonth() {
                let month = this.dateStore.month
                month = month > 10 ? 0 : month + 1
                this.dateStore.setMonth(month)
                this.$emit('month-change', 23)
            }
        }
	}
</script>
<style lang="scss">
	.dx-calendar {
        width: 100%;
        /* table-layout: fixed; */
    }
    // 月份选择器
    .dx-calendar-select {
        padding: 0 0.4rem;
        margin-bottom: 0.51rem;
        text-align: center;
        display: flex;
        align-items: center;
        >input {
            text-align: center;
            border: none;
            flex-grow: 1;
            font-size: 0.36rem;
        }
        >span {
            color: #8DD0EC;
        }
        &-left{
            background: $--calendar-left-icon;
            background-size: 100% 100%;
            width: 0.15rem;
            height: 0.27rem;
        }
        &-right{
            background: $--calendar-right-icon;
            background-size: 100% 100%;
            width: 0.15rem;
            height: 0.27rem;
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
            border-radius: 50%;
            margin-bottom: 0.63rem;
            >th {
                font-weight: normal;
                font-size: 0.3rem;
                padding: 0.1rem 0;
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