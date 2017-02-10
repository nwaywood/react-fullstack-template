import React from 'react'

class Home extends React.Component {

    // lifecycle function that is called before render
    componentWillMount() {
        // some dummy state
        this.setState({
            initialState: true,
        })
    }

    render() {
        return (
            <div data-dummy-state={this.state.initialState}>Home</div>
        )
    }
}

export default Home
