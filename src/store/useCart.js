import {create} from 'zustand'

export const useCart = create((set)=>({
	itemList: [],
	addItem:(item) => set((state)=> ({itemList: [...state.itemList, item]})),
	removeItem:(id) => set((state)=> ({itemList: state.itemList.filter(item => item.id !==id)})),
	addList:(data) => set((state)=>({itemList: [...state.itemList, ...data]})),
	emptyItemList:()=>set((state)=>({itemList:[]}))
}))