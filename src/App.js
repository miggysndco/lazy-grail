import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/AboutPage';
import Products from './components/pages/ProductsPage';
import Contact from './components/pages/ContactPage';

function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/' exact element={ <Home />}/>
        <Route path='/about' exact element={ <About />}/>
        <Route path='/products' exact element={ <Products />}/>
        <Route path='/contact' exact element={ <Contact />}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
