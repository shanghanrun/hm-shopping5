import {create} from 'zustand'

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
	addProduct:(val)=>set({productList:{...val}}),
	getProductList:()=>set(),
	createProduct:()=>set(),
	deleteProduct:()=>set(),
	editProduct:()=>set(),
	getProductDetail:()=>set(),
}))

export default productStore;