import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { AppProvider } from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider> 
  <App />
  </AppProvider>
  
  </React.StrictMode>
);
