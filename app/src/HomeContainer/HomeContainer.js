// @flow

import React from "react"

import Home from "./Home"

type Props = {}
type State = {
    posts: Array<Object>,
    isFetching: boolean
}

class HomeContainer extends React.Component<Props, State> {
    state = {
        posts: [],
        isFetching: true
    }

    componentDidMount() {
        this.fetchData()
    }

    onRefreshClick = () => {
        this.setState((prevState, props) => ({
            isFetching: true
        }))

        this.fetchData()
    }

    fetchData = () => {
        fetch("/api/hacker-news")
            .then(result => result.json())
            .then(payload =>
                this.setState((prevState, props) => ({
                    posts: payload.hits,
                    isFetching: false
                }))
            )
    }

    render() {
        return (
            <div>
                <button onClick={this.onRefreshClick}>Refresh</button>
                <Home
                    posts={this.state.posts}
                    isFetching={this.state.isFetching}
                />
            </div>
        )
    }
}

export default HomeContainer
