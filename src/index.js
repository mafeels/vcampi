import React from 'react';
import ReactDOM from 'react-dom/client';

import Map from './Map';
import Login from './Login';

import './index.css';
import Cadastro from './Cadastro';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase-config';
import { useEffect } from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return(
    <div className='bg'>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/main" element={<Map/>}/>
      </Routes>
    </div>
  )
  
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
