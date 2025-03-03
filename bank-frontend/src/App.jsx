import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./features/login/Login.jsx";
import Errors from "./pages/Errors.jsx";
import './assets/style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<Errors/>}/>
                    </Routes>
                    <Footer/>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default App
