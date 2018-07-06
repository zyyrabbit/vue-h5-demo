
<template>
    <div class="teacher-course-operate">
        <div class="teacher-course-operate__head">
            <dx-header is-close>
              <span class="teacher-course-operate__head-add" 
                slot="next" 
                @click="submitCourse()">保存</span>
            </dx-header>
            <div class="teacher-course-operate__head--title">{{id ? '修改课程' : '新增课程'}}</div>
        </div>
        <div class="teacher-course-operate__content">
            <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-course-operate__content--item"
                >
                    <p>课程封面</p>
                    <div class="teacher-course-operate__content--item-pic" @click="selectImage()">
                      <div class="teacher-course-operate__content--item-pic-add"></div>
                      <img v-if="course.courseImage" :src="course.courseImage" />
                    </div>
                    <input ref="selectImage" @change="uploadImage()" type="file" v-show="false" />
                </div>
            </dx-cell-item>
            <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-course-operate__content--item"
                >
                    <p>课程名称</p>
                    <dx-input
                        v-model="course.courseName"
                        :inputStyle = "inputStyle"
                        placeholder="请输入课程名称"
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
                      v-model="course.courseClassifyId"
                      :options="options"
                      value-key="id"
                      label-key="categoryName"
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
                <textarea v-model="course.courseRecommend" placeholder="请输入课程简介" class="teacher-course-operate__content-textarea">
                </textarea>
              </div>
            </dx-cell-item>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import capi from 'api/courseApi.js'
import DxHeader from 'pages/common/HeaderPage.vue'
export default {
  components: {
      DxHeader
  },
  data() {
    return {
      id: this.$route.params.id,
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
        courseClassifyId: 0,
        courseName: '',
        courseRecommend: '',
        courseImage: ''
      }
    }
  },
  mounted() {
    capi.getCourseCategory().then(r => {
      console.info(r.data)
      this.options = r.data
      this.course.courseClassifyId = this.options[0].id
    })
    if (this.id) {
      capi.getCourseDetl({id: this.id}).then(r => {
        const _course = r.data
        this.course.courseClassifyId = _course.courseClassifyId
        this.course.courseName = _course.courseName
        this.course.courseRecommend = _course.courseRecommend
        this.course.courseImage = _course.courseImage
      })
    }
  },
  methods: {
    change() {
      console.log(this.course.type)
    },
    selectImage() {
      this.$refs.selectImage.click()
    },
    uploadImage() {
      let file = this.$refs.selectImage.files[0]
      let formdata = new FormData()
      formdata.append('file', file)
      axios({
        url: axios.$context + '/images/fileUpload',
        method: 'post',
        data: formdata,
        headers: {'Content-Type': 'multipart/form-data'}
      }).then((r) => {
        this.course.courseImage = r.data.data
      }).catch(() => {
        alert('上传失败')
      })
    },
    submitCourse() {
      let valid = true
      Object.key(this.course).forEach(key => {
        if (!this.course[key]) {
          valid = false
        }
      })
      if (!valid) {
        alert('请完整填写')
      } else {
        capi.saveCourse(this.course).then(r => {
          alert('操作成功!')
          this.$router.go(-1)
        })
      }
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
        @include e(head-add) {
          color: $--common-selectd-text-font-color;
        }
        @include e(content) {
            @include m(item) {
                p:nth-child(1) {
                    font-size: 0.28rem;
                    margin-bottom: 0.26rem;
                }
                input{
                  color: $--common-selectd-text-font-color;
                }
                select{
                  color: $--common-selectd-text-font-color;
                }
            }
            /*封面*/
            @include m(item-pic) {
                width: 3.03rem;
                height: 1.67rem;
                margin-top: 0.22rem;
                background-color: #ECECEC;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.1rem;
                &-add{
                  background: url('@~assets/images/addcourse_icon.png') center center no-repeat;
                  background-size: 100% 100%;
                  width: 0.33rem;
                  height: 0.33rem;
                }
                img{
                  width: 100%;
                  height: 100%;
                  border-radius: 0.1rem;
                }
            }
          &-textarea{
            font-size: 0.36rem;
            border: none;
            width: 100%;
            resize: none;
            color: $--common-selectd-text-font-color;
          }
          &-textarea::-webkit-input-placeholder{
            color: #D3D3D3;
          }
        }
    }
</style>