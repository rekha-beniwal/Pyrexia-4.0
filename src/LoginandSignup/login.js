import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { Link } from 'react-router-dom';
import { BASE_URL } from '../BaseUrl';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://pyrexia-backend.onrender.com/login", { email, password });
            alert(response.data.message);
            if (response.data.success) {
                navigate('/'); // redirect to dashboard on successful login
            }
        }
        catch(err) {
            alert(err.response?.data?.error || 'An error occurred');
        };

    };

    const loginWithGoogle = () => {
        window.open(`${BASE_URL}/auth/google/callback`, "_self");
    };

    return (
        <div className="login-page mt-24">
            <h1 className='text-6xl lg:8xl font-sant-serif poppins my-12 md:my-16 lg:my-20 font-semibold animate-bounce' style={{ textAlign: "center" }}>Login</h1>
            <div className="form">
                <form className='login-form' onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='message'><Link to="/forgotpassword">Forgot Password?</Link></p>
                    <button type="submit">Login</button>
                    <p className='message'>Not registered? <Link to="/signup">Create an account</Link></p>
                </form>
                <button className='login-with-google-btn' onClick={loginWithGoogle}>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
