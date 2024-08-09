import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { It } from './pages/It';
import { CyberSecurity } from './pages/CyberSecurity';
import { Buzzbee } from './pages/Buzzbee';
import { ItServicePage } from './pages/ItServicePage';
import { BuzzBeeLanding } from './pages/BuzzBeeLanding';
import { CyberSecurityLanding } from './pages/CyberSecurityLanding';
// import UserList from './pages/UserList';




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
          <Route path='/BuzzBeeLanding' element={<BuzzBeeLanding />} />
          <Route path='/CyberSecurityLanding' element={<CyberSecurityLanding />} />
          {/* <Route path='/UserList' element={<UserList />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
