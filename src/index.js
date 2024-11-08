import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';


// ReactDOM c'est pour attacher à notre HTM
const root = ReactDOM.createRoot(document.getElementById('root'));
// C'est dans la variable root que notre application sera afficher dans le HTML

// Ci-dessous : On importe le composant parent App.js 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

