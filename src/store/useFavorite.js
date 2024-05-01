import {create} from 'zustand'

export const useFavorite = create((set)=>({
	favoriteList: [],
	addItem:(item) => set((state)=> ({favoriteList: [...state.favoriteList, item]})),
	removeItem:(id) => set((state)=> ({favoriteList: state.favoriteList.filter(item => item.id !==id)})),
	emptyFavoriteList:()=>set((state)=>({favoriteList:[]}))

}))