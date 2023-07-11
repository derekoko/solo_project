import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="login" element={<Login />} />
  //       <Route path="dashboard" element={<Dashboard />} />
  //       <PrivateRoute path="/home">{<App />}</PrivateRoute>
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>
);
