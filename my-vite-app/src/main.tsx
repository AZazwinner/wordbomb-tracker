import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import UserStats from './UserStats.tsx'; // You'll create this next

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<UserStats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
