import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('root'))
