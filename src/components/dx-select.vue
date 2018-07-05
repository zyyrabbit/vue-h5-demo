<template>
    <!-- 两列排列 -->
    <select
         v-model="model"
         class="dx-select"
    >
        <!--placeholder-->
        <option
            v-if="placeholder"
            value=""
            disabled
            selected
        >{{placeholder}}</option>
        <option
             v-for="option of options"
             :value="option[valueKey]"
        >
            <slot :option="option">
                {{option[labelKey]}}
            </slot>
        </option>
    </select>

</template>
<script>
    export default {
        name: 'DxSelect',
        componentName: 'DxSelect',
        props: {
            value: {},
            placeholder: String,
            labelKey: {
                type: String,
                required: true
            },
            valueKey: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        computed: {
            model: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                    this.$emit('dx-select-change', value)
                }
            }
        }
    }
</script>
<style lang="scss">
    .dx-select {
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        background-color: transparent;
        font-size: inherit;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        color: #D3D3D3;
    }
</style>