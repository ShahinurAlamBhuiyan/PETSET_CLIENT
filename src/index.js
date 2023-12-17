import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='memory_amit_container'>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>
)