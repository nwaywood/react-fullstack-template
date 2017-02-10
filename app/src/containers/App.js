import React from 'react'
import Header from '../components/Header'

const App = (props) => (
    <div>
        <Header />
        <div id="main">
            {props.children}
        </div>
    </div>
)

App.propTypes = {
    children: React.PropTypes.node,
}

export default App
