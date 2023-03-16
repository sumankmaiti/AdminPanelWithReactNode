import { useRef, useState } from 'react'
import './Home.css'

const Home = () => {
	console.log('Home Screen called.');
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const containerRef = useRef(null)
	const signUpHandler = () => {
		containerRef.current.classList.add("right-panel-active");
		console.log(containerRef.current);
		
	}
	

	return(
		<div>
			<h2> Employee Management </h2>
			<div className='container' id='container' ref={containerRef}>
				<div className='form-container sign-up-container'>
					<form action='#'>
						<h1> Create Account </h1>
						Registration inputs
					</form>
				</div>

				<div className='form-container sign-in-container'>
					<form action='#'>
						<h1> Sign in </h1>
						<input 
						type='text'
						name='loginId' 
						id='loginId' 
						value={user} 
						onChange={(e) => setUser(e.target.value)} 
						placeholder='phone number or email'/>

						<input
						type='password'
						name='password'
						id='password'
						value={password}
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)} />

						<button type='submit' id='submit' > Login </button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='overlay-panel overlay-left'>
							<h1> Welcome Back! </h1>
							<p> Login to explore here </p>
							<button className='ghost' id='signIn'> </button>
						</div>
						<div className='overlay-panel overlay-right'>
							<h1> Hi There! </h1>
							<p> Provide us some of your information to know you better </p>
							<button className='ghost' id='signUp' onClick={signUpHandler}> Sign Up </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home