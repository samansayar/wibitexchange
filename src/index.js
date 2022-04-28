import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/output.css';
import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './dashboard/Index';
import App from './App';
import AppLayout from './layouts/AppLayout';
import Undefined from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route path="/register" element={<AppLayout><Register /></AppLayout>} />
        <Route path="/404" element={<AppLayout><Undefined /></AppLayout>} />
        <Route path="/dashboard" element={<Index />} />
      </Routes>
    </Router>
  </>
);