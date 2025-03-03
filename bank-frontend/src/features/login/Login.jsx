import React from 'react';
import {useState} from 'react';

const Login = () => {

    const [credentials, setCredentials] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.username.value;
        const password = event.target.password.value;

        setCredentials({email, password})

        console.log(credentials)
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" name="username"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" name="password"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
                    >Remember me</label
                    >
                    </div>

                    <button className="sign-in-button" type="submit">Sign In</button>

                </form>
            </section>
        </main>
    );
};

export default Login;