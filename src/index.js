import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
);
