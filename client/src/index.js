import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
=======
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
<<<<<<< HEAD
    
      <App />
  
=======
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
>>>>>>> 6c320e6a98a121077b67ca48a15926ed192bab65
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


