// @flow

import React from "react"
import { hot } from "react-hot-loader"

import { BrowserRouter as Router, Route } from "react-router-dom"

import "./globalCSS"
import HomeContainer from "./HomeContainer/HomeContainer"
import AppErrorBoundary from "./AppErrorBoundary"
import Header from "./Header"
import About from "./About/About"

export default hot(module)(() => (
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
))
