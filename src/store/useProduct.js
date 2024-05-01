import {create} from 'zustand'

export const useProducts = create((set)=>({
	productList: [],
	makeList:(data) => set({productList:[...data]}),
	setItemStatus: (id) => {
		set((state) => ({
			productList: state.productList.map((item) =>
				item.id === id ? { ...item, status: 'favorite' } : item
			)
		}))
	},
	deleteItemStatus:(id)=>{
		set((state) => ({
			productList: state.productList.map((item) =>
				item.id === id ? { ...item, status: '' } : item
			)
		}))
	},
	setItemCount:(id, count)=>{
		set((state) => ({
			productList: state.productList.map((item) =>
				item.id === id ? { ...item, "count": count } : item
			)
		}))
	}
}))