import React from 'react'

class About extends React.Component {

    // lifecycle function that is called before render
    componentWillMount() {
        // some dummy state
        this.setState({
            initialState: true,
        })
    }

    render() {
        return (
            <div data-dummy-state={this.state.initialState}>About</div>
        )
    }
}

export default About
