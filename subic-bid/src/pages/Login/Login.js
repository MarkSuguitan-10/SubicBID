import React from 'react';
import Logo from './../../Resource/SBMA.png';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='companylogo-container'>
                <img src={Logo} alt="SBMA Logo"/>
                <h4>Subic Bay Freeport Business Registration System</h4>
            </div>
            <div className="userinput-container">
                <div className="userform">
                    <form className="loginform" action="https://www.example.com/ph" method="post">
                        <input className="user-input" type="text" name="username" required="required" placeholder="Email Address"/> 
                        <br />
                        <input className="user-input" type="password" name="password" required="required" placeholder="Password"/>
                        <input className="btn submit" type="submit" value="Sign In"/>
                        <div className="loginoptions-container">
                            <button className="btn-link">Forgot Password</button>
                            <button className="btn-link">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
