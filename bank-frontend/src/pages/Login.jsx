import React, { useEffect, useState } from 'react';
import { useGetTokenMutation } from "../store/api/userApi.js";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../store/slices/loginSlice.js";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);
    const [getToken, results] = useGetTokenMutation();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.username.value;
        const password = event.target.password.value;

        await getToken({ email, password });
    };

    useEffect(() => {
        if (results.isSuccess && results.data.body?.token) {
            dispatch(setToken(results.data.body.token));
        } else if (results.isError) {
            setErrorMessage(results.error.data.message);
        }
    }, [results, dispatch]);

    useEffect(() => {
        if (token) {
            navigate("/profile");
        }
    }, [token, navigate]);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {results.isLoading && <p>Loading...</p>}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
};

export default Login;
