import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './style.css'

export const LoginScreen = ({ history }) => {
    const [signUpMode, setSignUpMode] = useState(false);
    const handleMode = () => setSignUpMode(!signUpMode);

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {

        const lastPatch = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload:{
                name: 'Diego Wagner',
                email: 'Diegoo.javier.wagner@gmail.com'
            }
        });
        history.replace( lastPatch );
    }

    return (
        <div className={`${signUpMode ? "container sign-up-mode" : "container"}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" autoComplete="true" />
                        </div>
                        <input type="submit" defaultValue="Login" className="btn solid" onClick={ () => handleLogin() } />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#?" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user" />
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock" />
                            <input type="password" placeholder="Password" autoComplete="true"/>
                        </div>
                        <input type="submit" className="btn" defaultValue="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#?" className="social-icon">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-google" />
                            </a>
                            <a href="#?" className="social-icon">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" onClick={ () => handleMode() }>
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" onClick={ () => handleMode() }>
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    )
}