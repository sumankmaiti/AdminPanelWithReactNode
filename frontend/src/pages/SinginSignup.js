import { useRef } from 'react'
import {useDispatch} from 'react-redux'

import './Home.css'
import {authenticateUser} from '../redux/actions/authenticateUser'

const Home = () => {
	console.log('Home Screen called.');
	const dispatch = useDispatch()
	
	const containerRef = useRef(null)

	const phoneRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	const firstNameRef = useRef(null)
	const lastNameRef = useRef(null)
	const addressRef = useRef(null)
	
	const signUpStyleHandler = () => {
		containerRef.current.classList.add("right-panel-active");		
	}

	const signInStyleHandler = () => {
		containerRef.current.classList.remove("right-panel-active")
	}

	const loginHandler = (e) => {
		e.preventDefault()
		
		var id = phoneRef.current.value
		var	password = passwordRef.current.value

		console.log('home screen login handler: ', id, password);
		dispatch(authenticateUser(id, password))
		
	}
	
	return (
		<div>
			<h2> Employee Management </h2>
			<div className='container' id='container' ref={containerRef}>
				<div className='form-container sign-up-container'>
					<form action='#'>
						<h1> Create Account </h1>
						<input
						type='text'
						maxLength="10"
						name='signUpId'
						id='signUpId'
						placeholder='Phone Number'
						ref={phoneRef} />

						<input 
						type='email'
						name='signupEmail'
						id='signupEmail'
						placeholder='Email Id'
						ref={emailRef} />

						<input 
						type='password'
						name='signupPassword'
						id='signupPassword'
						placeholder='Password'
						ref={passwordRef} />

						<input 
						type='text'
						name='signupFname'
						id='signupFname'
						placeholder='First Name'
						ref={firstNameRef} /> 
						
						<input 
						type='text'
						name='signupLname'
						id='signupLname'
						placeholder='Last Name'
						ref={lastNameRef} /> 
						
						<input 
						type='text'
						name='signupAddress'
						id='signupAddress'
						placeholder='Address'
						ref={addressRef} />

						<button type='submit' id='signUp' > Create Account </button>
					</form>
				</div>

				<div className='form-container sign-in-container'>
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
						placeholder='Password'
						 />

						<button type='submit' id='submit' > Login </button>
						
						<label> </label>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='overlay-panel overlay-left'>
							<h1> Welcome Back! </h1>
							<p> Login to explore here </p>
							<button className='ghost' id='signIn' onClick={signInStyleHandler}> Sign In </button>
						</div>
						<div className='overlay-panel overlay-right'>
							<h1> Hi There! </h1>
							<p> Provide us some of your information to know you better </p>
							<button className='ghost' id='signUp' onClick={signUpStyleHandler}> Sign Up </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home