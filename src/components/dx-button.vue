<template>
	<button  
	    :class="[
		        type ? 'dx-button-' + type : '',
		        size ? 'dx-button-' + size : '',
                customClass,
		        {
		        	'is-disabled':disabled
		        }
	    ]"
        :style=""
	    class="dx-button" 
	    :disabled="disabled"  
	    :type="nativeType"
	 	@click="handleClick" 
	 >
		 <i 
		 	v-if="icon" 
		 	:class="'fa-' + icon" 
		 	class="fa"  
		 	aria-hidden="true" 
		 >
		 </i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<script>
export default {
    name: 'DxButton',
    props: {
        nativeType: {
            type: String, // 设置按钮的原生类型  button submit reset
            default: 'button'
        },
        icon: {
            type: String,
            default: ''
        },
        size: String, // 设置button的size
        type: String, // 设置按钮的样式类型
        disabled: {
            type: Boolean,
            default: false
        },
        customClass: String
    },
    methods: {
        handleClick: function(evt) {
            this.$emit('dx-button-click', evt)
        }
    }
}
</script>
<style lang="scss">
/*按钮基本样式*/

.dx-button {
    width: 100%;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 0.01rem solid #bfcbd9;
    border-color: #c4c4c4;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    background-color: transparent;
    border-radius: 0.04rem;
}

.dx-button:focus,
.dx-button:hover {
    color: #20a0ff;
    border-color: #20a0ff;
}


/*按钮默认样式*/

.dx-button-primary {
    color: #fff;
    background-color: #8DD0EC;
    border-color: #8DD0EC;
}

.dx-button-primary:focus,
.dx-button-primary:hover {
    border-color: #8DD0EC;
    color: #fff;
}


/*红色警告样式*/

.dx-button-warning {
    background: #ff4949;
    border-color: #ff4949;
    color: #fff;
}

.dx-button-warning:focus,
.dx-button-warning:hover {
    color: #ddd;
    border-color: #ff4949;
}
/*灰色样式*/

.dx-button-gray {
    background: #C3C3C3;
    border-color: #C3C3C3;
    color: #fff;
}
/*粉色样式*/

.dx-button-pinking {
    background: #FF9CC8;
    border-color: #FF9CC8;
    color: #fff;
}

/*完成无样式*/

.dx-button-origin {
    border: none;
    color: #999;
}

.dx-button-origin:focus,
.dx-button-origin:hover {
    color: red;
}


/*设置按钮大小*/

.dx-button-large {
    font-size: 0.16rem;
    padding: 0.11rem 0.19rem;
}

.dx-button-small {
    padding: 0.1rem 0.3rem;
    border-radius: 0.2rem;
    font-size: $--common-illustration-text-font-size;
    width: auto;
}

/*按钮禁用时的样式*/

.dx-button.is-disabled,
.dx-button.is-disabled:focus,
.dx-button.is-disabled:hover {
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
}

.dx-button-full {
    height: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    font-size: 0.3rem;
}

/* 与父元素同宽并且设置圆角 */
.dx-button-max {
    height: 1rem;
    width: 6.54rem;
    border-radius: 0.5rem;
    font-size: 0.3rem;
}
.dx-button-max:focus,
.dx-button-max:hover {
    border-radius: 0.5rem;
}
</style>