import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign Up");
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
  return (
    <div className="login-popup">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)}/>
            </div>
            <div className="login-popup-inputs">
                {currState==='Login'
                ? <></>
                :<input type="text" placeholder='Enter your name' required />}
                <input type="email" placeholder='Enter your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState === "Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By, continuing, I agree to the <a href='https://policies.google.com/terms'>Terms and Conditions</a>.</p>
            </div>
            {currState === 'Login' 
            ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}                    
        </form>
    </div>
  )
}

export default LoginPopup