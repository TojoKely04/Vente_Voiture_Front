import React, { useState } from 'react'
import user_icon from '../assets/image/person.png'
import email_icon from '../assets/image/email.png'
import password_icon from '../assets/image/password.png'
import '../assets/Login-SignUp.css';
import  {Form} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';

const LoginSingUp = () => {

    return (
        <>
            <Form> 
                <div className='login'>
                    <div className='header'>
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
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
                        <div className={"submit"} >
                            <Button className='submit' tag={Link} to={"/Annonce"}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
}

export default LoginSingUp
