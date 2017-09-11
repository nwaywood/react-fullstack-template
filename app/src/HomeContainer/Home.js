// @flow

import * as React from "react"

import { branch, renderComponent } from "recompose"
import styled from "emotion/react"

type Props = {
    posts: Array<Object>,
    isFetching: boolean // eslint-disable-line react/no-unused-prop-types
}

const HomeList = (props: Props) => (
    <div>
        <ul>{props.posts.map(renderItem)}</ul>
    </div>
)

// for each item in posts, map it to a <Li> styled-component containing the title
const renderItem = ({ title }: { title: string }) => (
    <Li key={title}>{title}</Li>
)

const Loading = props => <h2>loading...</h2>

// HoC for conditional rendering of the HomeList
const enhance: (
    React.ComponentType<Props>
) => React.ComponentType<Props> = branch(
    props => !!props.isFetching,
    renderComponent(Loading),
    i => i
)

const Li = styled.li`
    font-size: 1.5em;
    margin: 5px 0px;
`

export default enhance(HomeList)
