export default {
	methods: {
		goNext(path = '') {
           this.$router.push({ path })
        }
	}
}