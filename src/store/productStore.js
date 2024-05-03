import {create} from 'zustand'
import api from '../utils/api';
import uiStore from './uiStore'

// const {showToastMessage} =uiStore() 이러면 useRef()에러 난다.

const productStore =create((set)=>({
	error:'',
	selectedProduct:{},
	productList:[
		{
			"id": 0,
			"img": "https://noona-hnm.netlify.app/pattern-jacket.jpeg",
			"title": "벨티드 트윌 코트",
			"price": 99900,
			"choice": true,
			"new": true,
			"size": [
				"S",
				"M"
			],
			"status":"",
			"count": 0
		},
		{
			"id": 1,
			"img": "https://noona-hnm.netlify.app/ankle-jeans.jpeg",
			"title": "슬림핏 맘 하이웨이스트 앵클 진",
			"price": 29900,
			"choice": true,
			"new": true,
			"size": [
				"S",
				"M",
				"L"
			],
			"status": "",
			"count": 0
		},
		{
			"id": 2,
			"img": "https://noona-hnm.netlify.app/wide-jeans.jpeg",
			"title": "와이드 하이웨이스트 진",
			"price": 39900,
			"choice": false,
			"new": true,
			"size": [
				"M",
				"L"
			],
			"status": "",
			"count": 0
		}
	],
	getProductList:()=>set(),
	createProduct:async(formData)=>{
		try{
			const resp = await api.post('/product', formData)
			if(resp.status !==200) throw new Error(resp.error)
			console.log('성공한 데이터:', resp.data.data)
			// showToastMessage('상품생성 완료', 'success')
			uiStore.getState().showToastMessage('회원가입을 완료했습니다.', 'success');
			// set((state)=>({
			// 	productList: [...state.productList, resp.data.data]
			// }))  필요없다. 디비에서 받아올 것이다.
		}catch(e){
			console.log(e.message)
			set({error: e.message})
			uiStore.getState().showToastMessage(e.message, 'fail');
		}
	},
	deleteProduct:()=>set(),
	editProduct:()=>set(),
	getProductDetail:()=>set(),
}))

export default productStore;