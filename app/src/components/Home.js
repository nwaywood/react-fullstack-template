import React from 'react'

const Home = props => (
    <div>
        <ul> {props.posts.map(renderItem)}</ul>
    </div>
)

const renderItem = ({ title }) => {
    const style = {
        fontSize: '1.5em',
        margin: '5px 0px',
    }
    return <li style={style}>{title}</li>
}

export default Home
