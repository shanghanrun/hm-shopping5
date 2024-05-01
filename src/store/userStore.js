import {create} from 'zustand'
import api from '../utils/api'
const userStore =create((set)=>({
	user:null,
	loginWithToken: async ()=> set(),
	loginWithEmail: async ()=>set(),
	logout:async ()=> set(),
	loginWithGoogle: async ()=>set(),
	registerUser: async({name,email,password})=>{
		try{
			const resp = await api.post('/user', {email,password,name})
			if(resp.status !==200) throw new Error(resp.error)
			console.log('회원등록 성공', resp.data.data)
			set({user: resp.data.data})
		}catch(e){
			console.log(e.message)
			//누나는 error를 어딘가로 보내고 있다. 이것은 나중에...
		}
	},

}))

export default userStore;