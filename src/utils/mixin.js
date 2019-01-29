export default {
	methods: {
		goNext(path = '') {
      this.$router.push({ path })
    },
    plsWait() {
      alert('功能暂未开放,敬请期待')
    }
	}
}
