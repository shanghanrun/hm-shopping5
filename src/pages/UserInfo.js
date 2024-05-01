import React from 'react'
import { useUser } from '../store/useUser'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const UserInfo = () => {
	const {id, email, password} =useUser()
	const navigate = useNavigate()
  return (
	<div className="user-info">
		<div className='user-card'>
			<h1>UserInfo</h1>
			<h4>User ID : {id}</h4>
			<h4>User Email : {email}</h4>
			<h4>User Password : {password}</h4>
			<div className="user-info-button">
				<Button variant="primary" onClick={()=>navigate('/')}>Home</Button>
			</div>
		</div>
	</div>
  )
}

export default UserInfo