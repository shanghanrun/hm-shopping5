import {create} from 'zustand'
import api from '../utils/api';
import uiStore from './uiStore'

// const {showToastMessage} =uiStore() 이러면 useRef()에러 난다.

const productStore =create((set)=>({
	error:'',
	selectedProduct:{},
	productList:[],
	getProductList:async(query)=>{
		try{
			const resp= await api.get('/product', {params: {...query}})
			if(resp.status !==200) throw new Error(resp.error)
			console.log('product목록:',resp.data.data)
			const list = resp.data.data
			set({productList: list})	
		}catch(e){
			set({error: e.message})
			uiStore.getState().showToastMessage(e.message, 'error');
		}
	},
	createProduct:async(formData)=>{
		console.log('store로 받은 formData :', formData)
		try{
			const resp = await api.post('/product', formData)
			if(resp.status !==200) throw new Error(resp.error)
			console.log('성공한 데이터:', resp.data.data)
			uiStore.getState().showToastMessage('상품가입을 완료했습니다.', 'success');
		}catch(e){
			console.log(e.message)
			set({error: e.message})
			uiStore.getState().showToastMessage(e.message, 'error');
		}
	},
	deleteProduct:()=>set(),
	editProduct:()=>set(),
	getProductDetail:()=>set(),
}))

export default productStore;