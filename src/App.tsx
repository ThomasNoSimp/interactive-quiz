import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import { DownloadPage } from './Pages/Download';
import DonatePage from './Pages/Donate';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="stars"></div>
        <h1>Quiz Game</h1>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
