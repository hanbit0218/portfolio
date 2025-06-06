// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import './styles/utils.css';
import './styles/Accessibility.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);