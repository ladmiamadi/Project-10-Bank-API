import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useUpdateProfileMutation} from "../store/api/userApi.js";
import { setUserInfos} from "../store/slices/userSlice.js";

const User = () => {
    const token = useSelector((state) => state.login.token);
    const userInfos = useSelector(state => state.user.userInfos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [updateProfile, results] = useUpdateProfileMutation();
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!token) {
            navigate("/sign-in");
        }
    }, [token, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;

        await updateProfile({ firstname, lastname, token });
    }

    useEffect(() => {
        if (results.isSuccess && results.data.body?.firstName && results.data.body?.lastName) {
            dispatch(setUserInfos({ firstName: results.data.body.firstName, lastName: results.data.body.lastName }));
            setEdit(false);
        } else if (results.isError) {
            setErrorMessage(results.error.data.message);
        }
    }, [results, dispatch]);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/> {userInfos.firstName} {userInfos.lastName}</h1>
                { !edit ?
                <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
                :<form onSubmit={handleSubmit} className="edit-form">
                    <div>
                        <input type="text" name="firstname" id="firstname" placeholder="Tony"/>
                        <input type="text" name="lastname" id="lastname" placeholder="Jarvis"/>
                    </div>
                    <div>
                        <button type="submit">Save</button>
                        <button onClick={()=> setEdit(false)}>Cancel</button>
                    </div>
                </form>
                }

                {results.isLoading && <p>Loading...</p>}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
};

export default User;