import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('root'))
