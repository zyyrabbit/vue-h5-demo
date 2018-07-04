<template>
    <div class="teacher-course-place">
        <dx-header>
            <span 
              slot="next" 
              class="teacher-course-place--book"
              @click="goNext('/place')"
            >预定</span>
        </dx-header>
        <div class="teacher-course-place--title">
            我的场地
        </div>
        <dx-tabs 
            v-model="tabValue" 
            :tabs="tabs"
        ></dx-tabs>
        <ul
            class="teacher-course-place__detail"
        >   <li>
                <p>西溪湿地商务园区4号楼</p>
                <p>场地时间:2018年4月28号 13:00~15:00</p>
                <p>开课时间:2018年4月28号 13:00~14:30</p>
                <button-list
                    v-if="isHasBtns"
                    :btns="tabs[tabValue].btns"
                    class="teacher-course-place__detail--btns"
                ></button-list>
            </li>
        </ul>
    </div>
</template>
<script>
    import mixin from 'utils/mixin.js'
    import DxHeader from 'pages/common/HeaderPage.vue'
    import ButtonList from 'pages/common/ButtonList.vue'
    export default {
        components: {
            DxHeader,
            ButtonList
        },
        mixins: [mixin],
        data() {
            return {
                tabValue: 0,
                tabs: [
                    {
                        label: '未使用',
                        btns: [
                            {
                                text: '退订',
                                type: 'gray'
                            },
                            {
                                text: '开课',
                                type: 'pinking'
                            }
                        ],
                        value: 0
                    },
                    {
                      label: '已使用',
                      btns: [],
                      value: 1
                    }
                ]
            }
        },
        computed: {
            isHasBtns() {
                return !!this.tabs[this.tabValue].btns.length
            }
        }
    }
</script>
<style scoped lang="scss">
    @include b(teacher-course-place) {
        padding: 0.4rem;
        color: #484848;
        font-size: 0.36rem;
        @include m(book) {
            color: #57B8D7;
        }
        @include m(title) {
            font-size: 0.6rem;
        }
        /* 具体内容 */
        @include e(detail) {
            margin-top: 0.54rem;
            >li>p {
                margin-bottom: 0.21rem;
            }
            @include m(btns) {
                height: 0.92rem;
            }
        }

       
    }

</style>