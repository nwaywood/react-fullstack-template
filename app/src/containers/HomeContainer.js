import React from 'react'
import Home from '../components/Home'

class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            isFetching: true,
        }

        this.onRefreshClick = this.onRefreshClick.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    onRefreshClick() {
        this.setState((prevState, props) => ({
            isFetching: true,
        }))

        this.fetchData()
    }

    fetchData() {
        fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50')
        .then(result => result.json())
        .then(payload => this.setState((prevState, props) => ({
            posts: payload.hits,
            isFetching: false,
        })))
    }

    render() {
        return (
            <div>
                <button onClick={this.onRefreshClick}>Refresh</button>
                {this.state.isFetching ? <h2>Loading...</h2> : <Home posts={this.state.posts} />}
            </div>
        )
    }
}

export default HomeContainer
