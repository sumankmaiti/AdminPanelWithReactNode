import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	return(
		<div>
			<h2> Employee Management </h2>
			<div>
				<input 
				type='text'
				name='loginId' 
				id='loginId' 
				value={user} 
				onChange={(e) => setUser(e.target.value)} 
				placeholder='phone number or email'/>
			</div>
			<div>
				<input
				type='password'
				name='password'
				id='password'
				value={password}
				placeholder='Password'
				onChange={(e) => setPassword(e.target.value)} />
			</div>	
			<div>
				<button type='submit' id='submit' > Login </button>
				<button type='button' id='reset'> Reset </button>
				<Link to='/register'> I am a NEW HERE </Link>
			</div>
		</div>
	)
}

export default Home