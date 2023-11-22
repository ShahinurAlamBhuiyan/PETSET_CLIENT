import React from 'react';
import './App.css';


import Home from './pages/Home/Home';
import SharedNav from './components/Shared/SharedNav/SharedNav';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <SharedNav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
