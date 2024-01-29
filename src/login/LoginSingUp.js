import React, { useState } from 'react'
import user_icon from '../assets/image/person.png'
import email_icon from '../assets/image/email.png'
import password_icon from '../assets/image/password.png'
import '../assets/Login-SignUp.css';
import  {Form} from 'reactstrap';
import { Link , useNavigate} from 'react-router-dom';
import { Button} from 'reactstrap';
import axios from 'axios';

const LoginSingUp = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function login(email,password) {
       
        const data = {
            "email":email,
            "password":password
        }
        
        axios.post('https://ventevoitureback-production.up.railway.app/auth/authenticate', data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                navigate("/Annonce")
            })
            .catch(error => {
                setError("Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer");
            });
    }

    function submit(event){
        event.preventDefault();
        const email = event.target.elements.email.value;
        const pass = event.target.elements.password.value;
        login(email,pass);
        event.target.reset();
    }
    return (
        <>
            <Form onSubmit={submit}> 
                <div className='login'>
                    <div className='header'>
                        <div className="text">Login</div>
                        <div className="underline"></div>
                    </div>

                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" placeholder='Email' className="input" id="email" />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" placeholder='Password' className="input" id="password" />
                        </div>
                    </div>

                    <div className="forgot-password">Mot de passe oublier? <span>Cliquer ici! </span></div>
                    <div className="forgot-password">{error && <p style={{ color: 'red' }}>{error}</p>}</div>
                    
                    <div className="submit-container">
                        <div className={"submit"} >
                            <Button className='submit'>
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
