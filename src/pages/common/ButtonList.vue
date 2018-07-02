<template>
    <div class="button-list">
        <dx-button
            v-for="(btn, index) in btns"
            :key="index"
            :type="btn.type ? btn.type : 'primary'"
            @dx-button-click="goNext(btn.path)"
        >
            {{btn.text}}
        </dx-button>
    </div>
</template>
<script>
    import mixin from 'utils/mixin.js'
    export default {
        mixins: [mixin],
        props: {
            btns: {
                default: function() {
                    return []
                }
            }
        }
    }
</script>
<style  lang="scss">
    .button-list {
        @include space-between;
        height: 1.52rem;
        >button {
            height: 0.58rem;
            font-size: 0.3rem;
            margin-right: 0.27rem;
            border-radius: 0.29rem;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>
