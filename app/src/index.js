import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import Header from "./components/Header";
import About from "./components/About";

render(
  <Router>
    <div>
      <Header />
      <div id="main">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
