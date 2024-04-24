import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { It } from './pages/It';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/It' element={<It />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
