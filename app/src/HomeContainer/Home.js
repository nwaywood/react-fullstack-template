// @flow

import React from "react"

import styled from "react-emotion"

type Post = { title: string }

type Props = {
    posts: Array<Post>
}

const Home = (props: Props) => (
    <div>
        <ul>{props.posts.map(renderItem)}</ul>
    </div>
)

// for each item in posts, map it to a <Li> styled-component containing the title
const renderItem = ({ title }: Post) => <Li key={title}>{title}</Li>

const Li = styled.li`
    font-size: 1.5em;
    margin: 5px 0px;
`

export default Home
