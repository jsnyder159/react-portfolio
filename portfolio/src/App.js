import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/about/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
