import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import "./assets/styles/style.scss"
import { Provider } from 'react-redux';
import {store} from "./store/store"
import "./assets/styles/login.scss"
import "./assets/styles/users.scss"
import "./assets/styles/usersDetail.scss";
import "./assets/styles/landing.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter> 
        <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
