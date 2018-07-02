<template>
   <div
       class="teacher-change-place"
       v-footer
   >
	   <dx-header></dx-header>
	   <div class="teacher-change-place--title">
   	    	更换场地
	   </div>
       <div>
           <dx-cell-item>
                <div
                    slot="left"
                    class="teacher-change-place__item"
                >
                    <p>更换场地</p>
                    <p class="teacher-change-place__item--text-color">西溪湿地商务园区4号楼</p>
                </div>
           </dx-cell-item>
           <dx-cell-item>
               <div
                   slot="left"
                   class="teacher-change-place__item"
               >
                   <p>更换场地</p>
                   <p>西湖区文二西路551号好西城广场4楼</p>
               </div>
           </dx-cell-item>
           <dx-cell-item>
               <div
                    slot="left"
                    class="teacher-change-place__item"
               >
                   <p>更换场地</p>
                   <p class="teacher-change-place__item--text-color">西溪湿地商务园区4号楼</p>
               </div>
           </dx-cell-item>
       </div>
   	   <button-footer to="" btnText="确定"></button-footer>
    </div>
</template>
<script>
	import mixin from 'utils/mixin.js'
	import DxHeader from 'pages/common/HeaderPage.vue'
	import ButtonFooter from 'pages/common/ButtonFooter.vue'
	export default {
		mixins: [mixin],
		components: {
            DxHeader,
			ButtonFooter
		},
		data() {
			return {
			}
		}
	}
</script>
<style scoped lang="scss">
	@include b(teacher-change-place) {
		padding: 0.33rem 0.37rem 0;
		color: #484848;
		font-size: 0.36rem;
		@include m(title) {
			font-size: 0.6rem;
		}
        @include e(item) {
            max-width: 4.94rem;
            p:nth-child(1) {
                font-size: 0.28rem;
                margin-bottom: 0.16rem;
            }
            @include m(text-color) {
                color: #57B8D7;
            }
        }
	}	
</style>