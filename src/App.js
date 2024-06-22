import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import QrCodeListApp from './QrCodeListApp';
import ListPage from './ListPage';
import './App.css';

function App() {
  return (
  <div className="App">
     <Router basename="/qr-code-list-app">
      <Routes>
        <Route exact path="/" element={<QrCodeListApp />} />
        <Route exact path="/list" element={<ListPage />} />
      </Routes>
     </Router>
  </div>
  );
}

export default App;
