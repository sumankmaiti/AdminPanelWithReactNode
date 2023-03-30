import { useEffect, useMemo, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import {authenticateUser} from '../redux/actions/authenticateUser'

const Home = () => {
	console.log('Home Screen called.');
	const dispatch = useDispatch()
	const nevigate = useNavigate()
	
	const phoneRef = useRef(null)
	const passwordRef = useRef(null)

	const loginHandler = (e) => {
		e.preventDefault()
		
		var id = phoneRef.current.value
		var	password = passwordRef.current.value

		console.log('home screen login handler: ', id, password);
		dispatch(authenticateUser(id, password))
	}

	const {error, users} = useSelector(state => state.allUsers)

	if(users.length >  0) {
		nevigate('/view')
	}

	console.log(error, users);

	return (
		<div>
			<h2> Employee Management System </h2>
			<div className='container' id='container'>
				<form onSubmit={loginHandler}>
					<h1> Sign in </h1>
					<input 
					type='text'
					name='loginId' 
					id='loginId' 
					ref={phoneRef} 
					placeholder='phone number or email'/>

					<input
					type='password'
					name='password'
					id='password'
					ref={passwordRef}
					placeholder='Password' />

					<button type='submit' id='submit'> Login </button>
					<br/>
					<label> {error} </label>
				</form>
			</div>
		</div>
	)
}

export default Home