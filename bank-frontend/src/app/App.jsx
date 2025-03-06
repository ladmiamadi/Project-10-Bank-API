import {BrowserRouter, Route, Routes} from "react-router";
import Home from "../pages/Home.jsx";
import Layout from "../components/Layout.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";
import User from "../pages/User.jsx";
import Login from "../pages/Login.jsx";
import Header from "../components/Header.jsx";
import Errors from "../pages/Errors.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<Login/>}/>
                    <Route path="/profile" element={<User/>}/>
                    <Route path="*" element={<Errors/>}/>
                </Routes>
            </Layout>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
