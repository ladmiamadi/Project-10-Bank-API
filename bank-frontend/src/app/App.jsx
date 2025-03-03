import {Provider} from "react-redux";
import {store} from "./store.js";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "../pages/Home.jsx";
import Layout from "../components/Layout.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";
import User from "../pages/User.jsx";
import Login from "../features/login/Login.jsx";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/sign-in" element={<Login/>}/>
                        <Route path="/user" element={<User/>}/>
                    </Routes>
                </Layout>
                <Footer/>
            </BrowserRouter>

        </Provider>
    )
}

export default App
