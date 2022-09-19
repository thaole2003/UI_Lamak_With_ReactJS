import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './pages/Cart';
import Home from './pages/home';
import Register from './pages/Register';
import Login from './pages/Login';
import Product from './pages/product';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <div>
        <Route path="/" exact component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/logo" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        {/* <Route component={NotFound} /> */}
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
