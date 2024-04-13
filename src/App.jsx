import React from 'react';
import './App.css';
import { Footer } from './component/Footer/Footer';
import { Header } from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Golovna } from './component/Pages/Golovna/Golovna';
import { Publick } from './component/Pages/Publick/Publick';
import { News } from './component/Pages/News/News';
import { Doc } from './component/Pages/Doc/Doc';
import { Modal } from './component/Pages/Modal/Modal';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/"  element={<Golovna />} />
                <Route path="/news" element={<News />} />
                <Route path="/doc" element={< Doc/>} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/publick" element={<Publick />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
