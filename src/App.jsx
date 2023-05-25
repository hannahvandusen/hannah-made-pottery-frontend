import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App" >
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/portfolio' element={<Portfolio/>} /> 
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} /> 
          </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
