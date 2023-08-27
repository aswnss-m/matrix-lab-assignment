import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Assets/vanilla.css";
import './Assets/index.css';
import "./Assets/mobile.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
