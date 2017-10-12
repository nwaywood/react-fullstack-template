// @flow

import * as React from "react"

type Props = {
    children: React.Node
}

type State = {
    hasError: boolean
}

export default class AppErrorBoundary extends React.Component<Props, State> {
    state = { hasError: false }

    componentDidCatch(error: Error) {
        // Display fallback UI
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>
        }
        return this.props.children
    }
}
