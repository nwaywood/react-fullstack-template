/**
 * Created by Peter Ilfrich
 * Copyright (c) 2016 IBM Research. All rights reserved.
 *
 *
 */
import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </header>
)

export default Header
