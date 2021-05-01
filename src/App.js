import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Instructions from './components/Instructions/Instructions';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';

function App () {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Home />
      <About />
      <Download />
      <Instructions />
      {/* <Home />
      <About />
      <Instructions />
      <Download />
      <Footer /> */}
    </div>
  );
}

export default App;