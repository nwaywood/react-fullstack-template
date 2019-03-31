// @flow

import React from "react"
import axios from "axios"

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
        axios
            .get("/api/hacker-news")
            .then(({ data }) => {
                console.log(data)
                this.setState((prevState, props) => ({
                    posts: data.hits,
                    isFetching: false
                }))
            })
            .catch(error => {
                this.setState(state => {
                    throw error
                })
            })
    }

    render() {
        const Loading = () => <h2>loading...</h2>
        const { isFetching, posts } = this.state
        return (
            <div>
                <button onClick={this.onRefreshClick}>Refresh</button>
                {isFetching ? <Loading /> : <Home posts={posts} />}
            </div>
        )
    }
}

export default HomeContainer
