import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/LandingPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;