export const BUY_CART = 'BUY_CART'

export default {
    [BUY_CART](state, price) {
		state.count = price;
	},
}