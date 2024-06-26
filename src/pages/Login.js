import React, { useState } from 'react'
import {Container, Form, Button, Alert} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import userStore from '../store/userStore'

const Login = () => {
	const {user, error, loginWithEmail} = userStore()
	const [email, setEmail] =useState('')
	const [password, setPassword] =useState('')
	const navigate = useNavigate()

	const login= async(event)=>{
		event.preventDefault();
		await loginWithEmail({email,password})	
	}
	if(user){
		navigate('/')
	}

  return (
	<div className="top">
	<div className="login-container">
	<Container>
		{error && (
          <div className="error-message">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
		<Form onSubmit={(event)=>login(event)}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control 
					type="email" 
					placeholder="Email"
					name='email' 
					onChange={(e)=>setEmail(e.target.value)}
					/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control 
					type="password" 
					placeholder="Password" 
					name="password"
					onChange={(e)=>setPassword(e.target.value)}
					/>
			</Form.Group>
			<div className="display-space-between login-button-area">
				<Button variant="danger" type="submit">Login</Button>
				<div>
				아직 계정이 없으세요?<Link to="/register">회원가입 하기</Link>{" "}
				</div>
			</div>

			<div className="text-align-center mt-2">
				<p>-외부 계정으로 로그인하기-</p>
				<div className="display-center"></div>
			</div>
			</Form>
	</Container>
	</div>
	</div>
  )
}

export default Login