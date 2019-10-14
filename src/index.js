import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/navBar';
import Carousel1 from './components/homeComponents/js/carousel';
import Products from './components/products/products'
import {Route,Link,BrowserRouter as Router } from 'react-router-dom';
import BlogHome from './components/blog/blogHome';
import TutorialsHome from './components/tutorials/tutorialsHome';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/nav" component={NavBar} />
        <Route path="/carousel" component={Carousel1} />
        <Route path="/products" component={Products} />
        <Route path="/blog" component={BlogHome} />
        <Route path="/tutorials" component={TutorialsHome} />
      </div>
    </Router>
  )



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
