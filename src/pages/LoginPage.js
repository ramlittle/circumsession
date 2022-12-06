//router link
import {Link, useNavigate} from 'react-router-dom';

//css 
import '../css/LoginPage.css';
import { useState } from 'react';

// axios
import axios from 'axios';

const LoginPage=()=>{

    // Navigate hook
    const navigate = useNavigate();
    
    // States
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const clientInStorage = localStorage.getItem('userId');
    console.log(clientInStorage);

    // If user is still loggedin, redirect to admin page
    if( clientInStorage ) {
        navigate('/bookingpage');
        window.location.reload(false);
    }

    // 
    const loginAuthentication = (e) => {
		e.preventDefault();
		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/auth/login',
			data: {
				username,
				password
			},
		};

		// API call
		axios(configuration)
			.then((result) => {
				// LocalStorage to store user id
				localStorage.setItem('userId', result.data.id);
                alert(result.data.status);
				navigate('/bookingpage');
				window.location.reload(false);
			})
			.catch((error) => {
                alert(error.response.data.status);
				setUsername('');
                setPassword('');
			});
	};


    return(
        <section className='login-page'>
            <form 
                onSubmit={(e)=>loginAuthentication(e)}
                className='login-form-container'
            >

                <img className='loginpage-logo' src={require('../images/landingpagelogo.png')}></img>

                <label htmlFor='username'>Username:</label>
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter admin username'
                        required
                        type='text'/>
                        
                <label htmlFor='password'>Password:</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter admin password'
                        autoComplete='on'
                        required
                        type='password'/>
                <button
                    className='login-link'
                    type='submit'
                >Login</button>
            </form>
        </section>
    )
}
export default LoginPage;