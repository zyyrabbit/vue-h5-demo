
<template>
    <div class="teacher-billing-detail">
        <div class="teacher-billing-detail__head">
            <dx-header is-close></dx-header>
            <div class="teacher-billing-detail__head--title">账单明细</div>
            <div class="teacher-billing-detail__head--money">{{detail.number}}</div>
        </div>
        <div class="teacher-billing-detail__content">
            <dx-cell-item>
                <div slot="left">类型</div>
                <span slot="right">{{detail.type}}</span>
            </dx-cell-item>
            <dx-cell-item>
                <div slot="left">时间</div>
                <span slot="right">{{detail.time}}</span>
            </dx-cell-item>
            <dx-cell-item>
                <div slot="left">交易单号</div>
                <span slot="right">{{detail.seqNo}}</span>
            </dx-cell-item>
            <dx-cell-item>
                <div slot="left">状态</div>
                <span slot="right">{{detail.status}}</span>
            </dx-cell-item>
        </div>
    </div>
</template>
<script>
    import DxHeader from 'pages/common/HeaderPage.vue'
    export default {
        components: {
            DxHeader
        },
        data() {
            return {
                detail: {
                    type: '课程收入',
                    time: '2018年4月29号 07:30',
                    number: '+760.00',
                    seqNo: '10983785784332',
                    status: '已入账'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @include b(teacher-billing-detail) {
        padding: 0.33rem 0.37rem 0;
        color: #484848;
        font-size: 0.36rem;
        @include e(head) {
            @include m(title) {
                margin-top: 0.5rem;
                font-size: 0.6rem;
            }
            @include m(money) {
                font-size: 1rem;
                margin-top: 0.76rem;
                margin-bottom: 0.5rem;
                color: #57B8D7;
            }
        }
    }
</style>