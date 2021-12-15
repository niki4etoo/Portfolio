import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
	<Routes>
		<Route path="/" element={<App />} />
		<Route path="Home" element={<Home />} />
	</Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
