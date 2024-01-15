import React, { useState } from 'react'
import user_icon from '../assets/image/person.png'
import email_icon from '../assets/image/email.png'
import password_icon from '../assets/image/password.png'
import '../assets/Login-SignUp.css';

const LoginSingUp = () => {

    const[action,setAction] = useState("Login");

  return (
    <>
        <div className='login'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email' className="input" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' className="input" />
                </div>
            </div>

            <div className="forgot-password">Mot de passe oublier? <span>Cliquer ici! </span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Sing Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
            </div>
        </div>

    </>
  )
}

export default LoginSingUp
