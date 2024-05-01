import {create} from 'zustand'
import api from '../utils/api'

const userStore =create((set)=>({
	user:null,
	token:null,
	error:'',
	// loading:true,

	loginWithToken: async ()=> set(),
	loginWithEmail: async ({email,password})=>{
		try{
			const resp = await api.post('/user/login', {email,password})
			if(resp.status !== 200){
				throw new Error(resp.data.message)
			}
			console.log('resp', resp)
			set({user: resp.data.user, token:resp.data.token })
		} catch(e){
			console.log(e.message)
			set({error:e.message})
		}
	},
	logout:()=> {
		sessionStorage.clear()
		set({user:null})
	},
	loginWithGoogle: async ()=>set(),
	registerUser: async({name,email,password}, navigate, showToastMessage)=>{
		try{
			const resp = await api.post('/user', {email,password,name})
			if(resp.status !==200) throw new Error(resp.message)
			console.log('회원등록 성공', resp.data.data)
			set({user: resp.data.data})
		
			await showToastMessage('회원가입을 완료했습니다.', 'success')
			navigate('/login')

		}catch(e){
			console.log(e.message)
			//누나는 error를 어딘가로 보내고 있다. 이것은 나중에...
		}
	},


}))

export default userStore;