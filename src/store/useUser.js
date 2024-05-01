import {create} from 'zustand'
import {v4 } from 'uuid';

export const useUser = create((set)=>({
	id:'',
	email:'',
	password:'',
	setUser:({email, password})=>set({id:v4(), email,password})
}))