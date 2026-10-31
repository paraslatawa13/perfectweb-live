import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/fontawesome-fix.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx';
import { LoaderProvider } from "./context/LoaderContext";

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <HelmetProvider>
      <BrowserRouter>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </BrowserRouter>
    </HelmetProvider>

);



