// @flow

import React, { useEffect, useState } from "react"
import axios from "axios"

import Home from "./Home"

const HomeContainer = () => {
    const [state, setState] = useState({
        posts: [],
        isFetching: true
    })

    useEffect(() => {
        fetchData()
    }, [])

    const onRefreshClick = () => {
        setState({
            isFetching: true,
            posts: state.posts
        })

        fetchData()
    }

    const fetchData = () => {
        axios
            .get("/api/hacker-news")
            .then(({ data }) => {
                setState({
                    posts: data.hits,
                    isFetching: false
                })
            })
            .catch(error => {
                throw error
            })
    }

    const Loading = () => <h2>loading...</h2>
    const { isFetching, posts } = state
    return (
        <div>
            <button onClick={onRefreshClick}>Refresh</button>
            {isFetching ? <Loading /> : <Home posts={posts} />}
        </div>
    )
}

export default HomeContainer
