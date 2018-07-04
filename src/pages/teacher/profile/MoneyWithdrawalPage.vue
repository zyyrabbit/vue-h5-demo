<template>
    <div class="teacher-money-withdeawal">
        <dx-header></dx-header>
        <p class="teacher-money-withdeawal--title">余额提现</p>
        <p class="teacher-money-withdeawal--number">可提现余额￥2900.00</p>
        <div class="teacher-money-withdeawal-form">
            <div class="teacher-money-withdeawal-form__item" >
                <dx-input
                    v-model="moneyNumber"
                    :inputStyle = "verificationCodeStyle"
                    placeholder="请输入提现金额"
                    input-class="teacher-money-withdeawal-form__item--input"
                >
                    ￥
                    <span slot="leftText" class="teacher-money-withdeawal-form__item--total">
                        <span class="teacher-money-withdeawal-form__item--total-text">
                            全部
                        </span>
                    </span>
                </dx-input>
            </div>
        </div>
        <p class="teacher-money-withdeawal--notice">目前只支持转出至支付宝</p>
        <div
             class="teacher-money-withdeawal--submit-btn"
             :class="{'is-disabled': +moneyNumber <= 0}"
        >
            <dx-button @dx-button-click="goNext('withDrawal/success')" size="max" type="primary">提现至支付宝</dx-button>
        </div>
        <transition
                name="router-slide"
                mode='out-in'
        >
            <router-view class="full-screen"/>
        </transition>
    </div>
</template>
<script>
    import mixin from 'utils/mixin.js'
    import DxHeader from 'pages/common/HeaderPage.vue'
    export default{
        components: {
            DxHeader
        },
        mixins: [mixin],
        data() {
            return {
                moneyNumber: 0,
                model: {
                    userName: '',
                    password: ''
                },
                verificationCodeStyle: {
                    paddingLeft: '0.4rem'
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    @include b(teacher-money-withdeawal) {
        padding: 0.33rem 0.37rem 0;
        font-size: 0.36rem;
        @include m(title) {
            font-size: 0.6rem;
            margin-top: 0.4rem;
            margin-bottom: 0.75rem;
        }
        @include m(number) {
            color: #484848;
        }
        @include b(teacher-money-withdeawal-form) {
            margin-top: 0.63rem;
            margin-bottom: 0.63rem;
            @include e(item-title) {
                font-size: 0.6rem;
            }
            @include e(item) {
                margin-top: 0.54rem;
                @include m(total) {
                    display: inline-block;
                    width: 1.88rem;
                    height: 0.51rem;
                    background: rgba(255,156,200,1);
                    border-radius: 0.26rem;
                    font-size: 0.3rem;
                    color: #FFFFFF;
                    text-align: center;
                    vertical-align: top;
                }
                @include m(total-text) {
                    vertical-align: middle;
                }
            }
        }
        @include m(notice) {
            font-size: 0.3rem;
            margin-bottom: 0.75rem;
        }
        @include m(submit-btn) {
            @include when(disabled) {
                opacity: 0.3;
            }
        }
    }
</style>