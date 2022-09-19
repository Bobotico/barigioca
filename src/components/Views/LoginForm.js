import React, { useState } from 'react';
import  "./LoginForm.css";

function LoginForm ({ Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    //const handleChange = e => {
    //    const {name,value} = e.target
    //    this.setState({[name]:value})
    //}
    
    const handleSubmit = e => {
        e.preventDefault();
        
        Login(details);
    }

        return(
        
        <form onSubmit={handleSubmit}>
            <div className='div-login'>
                <h2 style={{textAlign:"center", justifyContent:"center"}}>Login</h2>
                <div className='div-login-logo'>
                    <img
                        className="img-fluid pl-pr-5" //img-fluid
                        src="media/logo_barigioca_piccolo.jpg"
                        alt=""
                    />
                </div>

                {(error !== "") ? (<div className="error">{error}</div>) : ""}

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' placeholder='email...' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type='password' name='pwd' placeholder='password...' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>

                <div>
                    <button onSubmit={handleSubmit}>Log In</button>
                </div>

                <div>
                    <a className="goTo" href="/RegisterForm">Sign In</a>
                </div>
            </div>
        </form>
        )
}

export default LoginForm;