// @flow

import React from "react"
import { branch, renderComponent } from "recompose"
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

const Loading = props => <h2>loading...</h2>

type FunctionComponent<P, Context> = (
    props: P,
    context: Context
) => ?React$Element<any>

type Enhance = (
    comp: FunctionComponent<Props, void>
) => FunctionComponent<Props>
const enhance: Enhance = branch(
    props => props.isFetching,
    renderComponent(Loading),
    t => t
)

const Li = styled.li`
    font-size: 1.5em;
    margin: "5px 0px";
`

export default enhance(HomeList)
