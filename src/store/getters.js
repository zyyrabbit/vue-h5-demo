/* 默认情况下，模块内部的 action、mutation 和 getter .
   是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。 */
export const cartProducts = state => {
	return state.cartStore.addedProds.map(({prodTitle, prodPrice, prodId, quantity}) => {
		// const product = state.products.all.find(p => p.prodId === prodId);
		return {
			prodId,
			prodTitle,
			prodPrice,
			quantity
		}
	})
}
