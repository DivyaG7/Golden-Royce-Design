import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { It } from './pages/It';
import { CyberSecurity } from './pages/CyberSecurity';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/It' element={<It />} />
          <Route path='/CyberSecurity' element={<CyberSecurity />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
