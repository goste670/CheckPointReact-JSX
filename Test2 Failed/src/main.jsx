// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import React, { useState, useEffect } from 'react';
import { Card, Button, Pagination, Modal, Form } from 'react-bootstrap';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import Name from './components/Name.jsx';
import Price from './components/Price.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';
import '../css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
