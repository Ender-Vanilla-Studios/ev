import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main.jsx';
import SecretSection from "./SecretSection.jsx";
import NotFound from "./NotFound.jsx";
import Redirect from "./Redirect.jsx";
import Donate from "./Donate.jsx";
import EVL from './EVl.jsx'
import './css/normalize.css'
import './css/styles.css'
import './css/styles-pro.css'
// import './u.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/secret-section" element={<SecretSection />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/r" element={<Redirect />} />
                <Route path="/evl" element={<EVL />} />
                <Route path="/d" element={<Donate />} />
            </Routes>
        </Router>
    );
}

export default App;

//by Mirik9724