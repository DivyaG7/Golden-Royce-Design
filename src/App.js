import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { It } from './pages/It';
import { CyberSecurity } from './pages/CyberSecurity';
import { Buzzbee } from './pages/Buzzbee';
import { ItServicePage } from './pages/ItServicePage';
import { CyberPage } from './pages/CyberPage';
import { BuzzbeePage } from './pages/BuzzbeePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/It' element={<It />} />
          <Route path='/CyberSecurity' element={<CyberSecurity />} />
          <Route path='/Buzzbee' element={<Buzzbee />} />
          <Route path='/ItServicePage' element={<ItServicePage />} />
          <Route path='/CyberPage' element={<CyberPage />} />
          <Route path='/BuzzbeePage' element={<BuzzbeePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
