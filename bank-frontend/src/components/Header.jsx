import React from 'react';
import {Link, useNavigate} from "react-router";
import ArgentLogo from '../assets/images/argentBankLogo.png';
import {useDispatch, useSelector} from "react-redux";
import {getLogout} from "../store/slices/loginSlice.js";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.login.token);
    console.log(token)

    const logOut = () => {
        dispatch(getLogout());
        navigate('/sign-in');
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={ArgentLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {token ? <button onClick={logOut} className="main-nav-item logout">Logout</button>
                    :
                    <Link to="/sign-in" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>

                }
            </div>
        </nav>
    );
};

export default Header;