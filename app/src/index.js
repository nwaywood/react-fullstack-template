// @flow

import React from "react"
import { render } from "react-dom"
import App from "./App"

const root = document.getElementById("root")
if (!root) {
    throw new Error("Error could not find root element")
}

render(<App />, root)
