import React from 'react';
import './App.css';

import SharedNav from './components/Shared/SharedNav/SharedNav';
import Footer from './components/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <SharedNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
