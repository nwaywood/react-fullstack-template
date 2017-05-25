// @flow

import React from "react"
import Home from "../components/Home"

class HomeContainer extends React.Component {
    constructor(props: Object) {
        super(props)
        this.state = {
            posts: [],
            isFetching: true
        }

        this.onRefreshClick = this.onRefreshClick.bind(this)
    }

    state: {
        posts: Array<Object>,
        isFetching: boolean
    }

    componentDidMount() {
        this.fetchData()
    }

    onRefreshClick: Function
    onRefreshClick() {
        this.setState((prevState, props) => ({
            isFetching: true
        }))

        this.fetchData()
    }

    fetchData() {
        fetch(
            "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50"
        )
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
