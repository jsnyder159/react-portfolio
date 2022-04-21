import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Navigation'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/about/About'
import Portfolio from './components/pages/portfolio/Portfolio'
import Resume from './components/pages/resume/Resume'
import Contact from './components/pages/contact/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
