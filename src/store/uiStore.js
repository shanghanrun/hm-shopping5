import {create} from 'zustand'
//status는 success, fail

const uiStore =create((set)=>({
	toastMessage:{message:'', status:''},
	isFullyLoaded:true, //나중에 false로 바꾸기
	showToastMessage:async(message,status)=>set({
		toastMessage: {message,status}
	})
}))

export default uiStore;