
<template>
    <div class="teacher-withdrawal-success">
        <div class="teacher-withdrawal-success__head">
            <dx-header is-close></dx-header>
            <p class="teacher-withdrawal-success__head--title">提现申请已提交！</p>
            <p class="teacher-withdrawal-success__head--time">预计到账时间 1-2 个工作日</p>
        </div>
        <div class="teacher-withdrawal-success__content">
            <dx-cell-item>
                <div slot="left">提现支付宝账号</div>
                <span slot="right">{{detail.alipayAccount}}</span>
            </dx-cell-item>
            <dx-cell-item>
                <div slot="left">提现金额</div>
                <span slot="right">￥{{detail.incomeNumber}}</span>
            </dx-cell-item>
            <dx-cell-item>
                <div slot="left">钱包余额</div>
                <span slot="right">￥{{detail.balance}}</span>
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
                    alipayAccount: '13878784656',
                    incomeNumber: 100,
                    balance: 2000
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @include b(teacher-withdrawal-success) {
        padding: 0.33rem 0.37rem 0;
        color: #484848;
        font-size: 0.36rem;
        @include e(head) {
            @include m(title) {
                margin-top: 0.4rem;
                font-size: 0.6rem;
            }
            @include m(time) {
                margin-top: 0.21rem;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>