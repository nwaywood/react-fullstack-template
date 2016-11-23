import React from 'react'
import { Link } from 'react-router'

const app = props =>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        {props.children}
    </div>

app.propTypes = {
    children: React.PropTypes.node,
}

export default app
