
<template>
    <div class="teacher-punch">
        <div class="teacher-punch__head">
            <dx-header>
		   		<span
                        slot="title"
                        class="teacher-punch__head--title"
                >我的钱包</span>
                <span
                        slot="next"
                        class="teacher-punch__head--withdrawal"
                        @click="goNext('/teacher/withDrawal')"
                >提现</span>
            </dx-header>
            <div class="teacher-punch__head--own-money-number">
                ￥760
            </div>
        </div>
        <div class="teacher-punch__record">
            <dx-cell-item
                v-for="record of records"
                :key="record.time"
                to="punch/billing"
            >
                <div slot="left">
                    <p>{{record.operateName}}</p>
                    <p class="teacher-punch__record--time">{{record.time}}</p>
                </div>
                <span
                    slot="right"
                    class="teacher-punch__record--money-number"
                    :class="{ 'is-income': +record.number > 0}"
                >{{record.number}}</span>
            </dx-cell-item>
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
    import DxHeader from 'pages/common/HeaderPage.vue'
    import mixin from 'utils/mixin.js'
    export default {
        components: {
            DxHeader
        },
        mixins: [mixin],
        data() {
          return {
              records: [{
                  operateName: '课程收入',
                  time: '2018年4月29号 07:30',
                  number: '+2330.00'
                  },
                  {
                      operateName: '余额提现',
                      time: '2018年4月29号 07:30',
                      number: '-2000.00'
                  }
              ]
          }
        }
    }
</script>
<style scoped lang="scss">
    @include b(teacher-punch) {
        padding: 0 0.37rem;
        color: #484848;
        font-size: 0.36rem;
        @include e(head) {
            height: 3.18rem;
            color: #FFFFFF;
            padding: {
                top: 0.36rem;
                left: 0.4rem;
                right: 0.4rem;
            }
            margin: 0 -0.4rem;
            background-color: #8DD0EC;
            font-size: 0.36rem;
            @include m(own-money-number) {
                font-size: 1rem;
                height: 1.47rem;
                @include center;
            }
        }

        @include e(record) {
            @include m(time) {
                font-size: 0.26rem;
            }
            @include m(money-number) {
                font-size: 0.3rem;
                color: #FF9CC8;
                @include when(income) {
                    color: #57B8D7;
                }
            }
        }
    }
</style>