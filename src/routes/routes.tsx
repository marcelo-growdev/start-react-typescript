import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Layout from '../config/layout/Default';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout component={Home} />} />
        <Route path="/about" element={<Layout component={About} />} />
        <Route path="/contact" element={<Layout component={Contact} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
