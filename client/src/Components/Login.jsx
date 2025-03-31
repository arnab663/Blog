import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Lock } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import '../styles/login.css'
import { useLogin } from '../hooks/useLogin';
import ErrorIcon from '@mui/icons-material/Error';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const verifyAndPostData = async (event) => {
        event.preventDefault();
        await login(email, password)
    }

    return (
        <>
            <div className='credentials__container'>
                <div className='container_login'>
                    <div className='heading_line'>
                        <h1 className='heading_title'>Blog</h1>
                    </div>
                    <form method='POST' className='login__info'>
                        <div className='login__credentials'>
                            <div className='user_email_field info_field'>
                                <PersonIcon className='info_icon' />
                                <input type='text' name='email' placeholder='Enter your mail ID' onChange={(e) => setEmail(e.target.value)} id='user_mail' />
                            </div>
                            <div className='user_password_field info_field'>
                                <Lock className='info_icon' />
                                <input type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} id='user_password'
                                />
                            </div>

                        </div>

                        {error && <div className="error"><ErrorIcon fontSize='small'/> {error}</div>}
                        <NavLink to='/login' style={{ marginTop: '.8rem', textDecoration: 'none', color: 'blue' }}>Forget Password?</NavLink>
                        <div className='btns_submit'>
                            <input type='submit' name='login__btn' className='login__btn' id='login__btn' onClick={verifyAndPostData} value='Login' disabled={isLoading} />
                            <p className='mt-3' style={{ color: '#000' }}>Don't have an account? <NavLink style={{ textDecoration: 'none', color: '#465370', fontWeight: 'bold' }} to='/signup'>Sign Up</NavLink></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login