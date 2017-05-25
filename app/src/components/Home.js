// @flow

import React from "react"
import styled from "styled-components"

type Props = {
    posts: Array<Object>,
    isFetching: boolean
}

const HomeList = (props: { posts: Array<Object> }) => (
    <div>
        <ul> {props.posts.map(renderItem)}</ul>
    </div>
)

// for each item in posts, map it to a <Li> styled-component containing the title
const renderItem = ({ title }: { title: string }) => (
    <Li key={title}>{title}</Li>
)

// HoC for conditional rendering of the HomeList
const withLoadingIndicator = Component => ({ isFetching, ...others }: Props) =>
    (isFetching ? <h2>Loading...</h2> : <Component {...others} />)

const Li = styled.li`
    font-size: 1.5em;
    margin: "5px 0px";
`

export default withLoadingIndicator(HomeList)
