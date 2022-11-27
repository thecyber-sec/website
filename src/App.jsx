import React, {useState, useEffect} from "react";
import "./App.css";
import {Route, Routes,} from "react-router-dom";
import {Navbar, Footer, Services, Homepage,ContactForm} from "./components";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner/Spinner";
import {AppContainer} from "./components/Elements.jsx";

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <AppContainer>
            {loading ? (<Spinner/>) : (<>
                <nav>
                    <Navbar toggle={toggle}/>
                </nav>
                <ScrollToTop>
                    <Routes>
                        <Route index exact path={"/"} element={<Homepage/>}/>
                        <Route exact path={"/services"} element={<Services/>}/>
                        <Route exact path={"/contact"} element={<ContactForm/>}/>
                    </Routes>
                </ScrollToTop>
                <Footer/>
            </>)}
        </AppContainer>
    );
};

export default App;
