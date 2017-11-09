// @flow

import React from "react"
import { render } from "react-dom"

import { BrowserRouter as Router, Route } from "react-router-dom"

import "./globalCSS"
import HomeContainer from "./HomeContainer/HomeContainer.re"
import About from "./About/About.re"
import AppErrorBoundary from "./AppErrorBoundary"
import Header from "./Header"

render(
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
    </Router>,
    document.getElementById("root")
)
