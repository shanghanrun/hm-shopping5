import {create} from 'zustand'

const cartStore =create((set)=>({
	cartList:[],
	cartItemCount:0,
	addCart:(val)=>set({cartList:{...val}}),
	getCartList:async()=>set(),
	deleteCartItem:async()=>set(),
	updateQty:async()=>set(),
	getCartQty:async()=>set(),
}))

export default cartStore;