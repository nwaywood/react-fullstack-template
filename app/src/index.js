import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import App from './containers/App'
import Header from './components/Header'
import Home from './containers/Home'
import About from './containers/About'


render((
    <Router>
        <div>
            <Header />
            <div id="main">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </div>
    </Router>
), document.getElementById('root'))
