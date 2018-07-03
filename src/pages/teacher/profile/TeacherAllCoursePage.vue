<template>
    <div class="teacher-all-course">
        <dx-header>
            <span 
                slot="next" 
                class="teacher-all-course--add"
            >新增</span>
        </dx-header>
        <div class="teacher-all-course--title">
            我的课程
        </div>
        <ul class="teacher-all-course__detail">   
            <li 
                v-for="course of courses"
                :key="course"
            >
                <p class="teacher-all-course__detail--course-name">{{course}}</p>
                <button-list
                    :btns="btns"
                    class="teacher-all-course__detail--btns"
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
                courses: ['带孩子走进故事王国', '蓝色小考拉', '小不点的日常'],
                btns: [
                    {
                        text: '删除课程',
                        type: 'gray'
                    },
                    {
                        text: '修改课程'
                    },
                    {
                        text: '开课',
                        type: 'pinking'
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    @include b(teacher-all-course) {
        padding: 0.33rem 0.37rem 0;
        color: #484848;
        font-size: 0.34rem;
        @include m(add) {
            color: #57B8D7;
        }
        @include m(title) {
            font-size: 0.6rem;
        }
        /* 具体内容 */
        @include e(detail) {
            margin-top: 0.25rem;
            >li:not(:last-child) {
                border-bottom: 0.02rem solid #EBEBEB;
            }
            @include m(course-name) {
                padding-top: 0.53rem;
            }
            @include m(btns) {
                padding: {
                    top: 0.58rem;
                    bottom: 0.58rem;
                }
                height: 0.58rem !important;
            }
        }

       
    }

</style>