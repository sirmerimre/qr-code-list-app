import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QrCodeListApp from './QrCodeListApp';
import ListPage from './ListPage';
import './App.css';

function App() {
  return (
  <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<QrCodeListApp />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
     </Router>
  </div>
  );
}

export default App;
