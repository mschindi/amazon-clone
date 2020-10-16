import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './Login.css'
import { auth } from "./firebase";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log (userCredential);
        })
        .catch(error => alert(error.message))

        //some fancy firebase login  shiiiittt!!!
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfuly created a new user with email and password
            console.log (auth);
        })
        .catch(error => alert(error.message))

        // do some fancy firebase register SHITTT!!!!!
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login_logo"
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

            <p>
                 By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className="login_registerButton"> Create your Amazon Account</button>

            </div>


        </div>
    )
}

export default Login
