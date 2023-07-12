import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  // <App />
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} /> */}
      {/* <PrivateRoute path="/home">{<App />}</PrivateRoute> */}
    </BrowserRouter>
  </React.StrictMode>
);
