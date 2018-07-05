
<template>
    <div class="teacher-course-operate">
        <div class="teacher-course-operate__head">
            <dx-header is-close>
                <span slot="next">保存</span>
            </dx-header>
            <div class="teacher-course-operate__head--title">课程新增</div>
        </div>
        <div class="teacher-course-operate__content">
            <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-course-operate__content--item"
                >
                    <p>课程封面</p>
                    <div class="teacher-course-operate__content--item-pic">

                    </div>
                </div>
            </dx-cell-item>
            <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-course-operate__content--item"
                >
                    <p>课程名称</p>
                    <dx-input
                        v-model="course.name"
                        :inputStyle = "inputStyle"
                        placeholder="请输入课程名城"
                    >
                    </dx-input>
                </div>
            </dx-cell-item>
            <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-course-operate__content--item"
                >
                    <p>课程分类</p>
                    <dx-select
                         v-model="course.type"
                         :options="options"
                         value-key="id"
                         label-key="name"
                         placeholder="请选择课程分类"
                    >
                    </dx-select>
                </div>
            </dx-cell-item>
            <dx-cell-item>
                <div
                     slot="left"
                     class="teacher-course-operate__content--item"
                >
                    <p>课程简介</p>
                    <dx-input
                        v-model="course.brief"
                        :inputStyle = "inputStyle"
                        placeholder="请输入课程名城"
                    >
                    </dx-input>
                </div>
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
                inputStyle: {
                    padding: 0,
                    border: 'none',
                    fontSize: '0.36rem'
                },
                options: [
                    {
                        id: 0,
                        name: '生物'
                    },
                    {
                        id: 1,
                        name: '化学'
                    },
                    {
                        id: 2,
                        name: '历史'
                    }
                ],
                course: {
                    name: '',
                    brief: '',
                    type: 1
                }
            }
        },
        methods: {
            change() {
                console.log(this.course.type)
            }
        }
    }
</script>
<style lang="scss">
    @include b(teacher-course-operate) {
        padding: 0.33rem 0.37rem 0;
        color: #484848;
        font-size: 0.36rem;
        @include e(head) {
            @include m(title) {
                margin-top: 0.5rem;
                font-size: 0.6rem;
            }
        }
        @include e(content) {
            @include m(item) {
                p:nth-child(1) {
                    font-size: 0.28rem;
                    margin-bottom: 0.26rem;
                }
            }
            /*封面*/
            @include m(item-pic) {
                width: 3.03rem;
                height: 1.67rem;
                margin-top: 0.22rem;
                background-color: #ECECEC;
            }

        }
    }
</style>