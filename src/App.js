import React from 'react';
import './App.css';

import SharedNav from './components/Shared/SharedNav/SharedNav';
import Footer from './components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
