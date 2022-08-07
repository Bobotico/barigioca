import React, { useState } from 'react';
import  "./LoginForm.css";

function SigninForm ({ Register}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    
    const handleSubmit = e => {
        e.preventDefault();
        
        Register(details);
    }

        return(
        
        <form onSubmit={handleSubmit}>
            <div className='div-login1'>
                <h2 style={{textAlign:"center", justifyContent:"center"}}>Sign in</h2>
                <div className='div-login-logo1'>
                    <img
                        className="img-fluid pl-pr-5" //img-fluid
                        src="media/logo_barigioca_piccolo.jpg"
                        alt=""
                    />
                </div>

                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type='name' name='name' placeholder='nome...' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name='email' placeholder='email...' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type='password' name='pwd' placeholder='password...' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>

                <div>
                    <button onSubmit={handleSubmit}>Submit</button>
                </div>

                <div>
                    <a className="goTo" href="/Login">Login</a>
                </div>
            </div>
        </form>
        )
}

export default SigninForm;