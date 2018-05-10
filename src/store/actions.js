import * as Types from './mutation-types.js'
export const addToCart = ({commit}, product) => {
	if (product.prodNum > 0) {
		commit(Types.ADD_TO_CART, {
			prodId: product.prodId,
			prodTitle: product.prodTitle,
			prodPrice: product.prodPrice
		})
	}
}
