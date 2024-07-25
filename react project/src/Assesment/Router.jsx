import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckList from './CheckList';

export default function Router() {
  return (
    <div>
          <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<CheckList />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}
