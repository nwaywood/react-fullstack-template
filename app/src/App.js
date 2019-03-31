// @flow

import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./globalCSS"
import HomeContainer from "./HomeContainer/HomeContainer"
import AppErrorBoundary from "./AppErrorBoundary"
import Header from "./Header"
import About from "./About/About"

const App = () => (
    <Router>
        <div>
            <Header />
            <div id="main">
                <AppErrorBoundary>
                    <Route exact path="/" component={HomeContainer} />
                    <Route path="/about" component={About} />
                </AppErrorBoundary>
            </div>
        </div>
    </Router>
)
export default App
