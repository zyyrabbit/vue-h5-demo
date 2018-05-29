<template>
  <ul class="dx--tab">
    <div class="tabs__active-bar" :style="barStyle"></div>
    <li 
      :class="{'tab__active': item.active}" class="dx--tab-item" 
      v-for="item in tabs" :value="item.value" 
      @click="onTabClick(item.value, item)"
      ref="tab">{{item.label}}</li>
  </ul>
</template>
<script>
  export default {
		componentName: 'DxTabs',
		name: 'DxTabs',    
    props: {
      value: {},
      tabs: Array
    },
    methods: {
      onTabClick(tabValue, tab) {
        this.tabs.forEach(t => {
          t.active = false
        })
        tab.active = true
        this.$emit('input', tab.value)
      }
    },
    mounted(){
      barStyle.get()
    },
    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$refs.tab) return
          let style = {}
          let offset = 0
          let tabSize = 0
          this.tabs.every((tab, index) => {
            let $el = this.$refs.tab[index]
            if (!tab.active) {
              offset += $el[`clientWidth`]
              return true
            } else {
              tabSize = $el[`clientWidth`]
              // 减去padding
              if (this.tabs.length > 1) {
                // tabSize -= (index === 0 || index === this.tabs.length - 1) ? 28 : 28
                // FIMXE 这里是写了一半的像素值
                tabSize -= 32
              }
              return false
            }
          })
          // 移动位置可以使用像素值 因为已经是根据元素的实际值计算的
          const transform = `translateX(${offset}px)`;
          // FIMXE 这里是写了像素值
          style.width = tabSize + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;      
          return style
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.dx--tab::-webkit-scrollbar { display: none }
.dx{
    &--tab {
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 0.14rem;
    width: 100%;
    overflow-x: scroll;
    // 父元素会根据字体撑开 需要设为0
    font-size: 0;
    white-space:nowrap;
    .tabs__active-bar { 
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.07rem;
      background-color: $--common-selectd-text-font-color;
      border-radius: 0.04rem;
      z-index: 1;
      transition: transform .3s cubic-bezier(.645,.045,.355,1);
      list-style: none;
    }
    .tab__active{
      color: $--common-selectd-text-font-color;
    }
  }
  &--tab-item {
    color: $--common-text-font-color;
    font-size: 0.28rem;
    display: inline-block;
    padding-right: 0.65rem;
  }
}
</style>