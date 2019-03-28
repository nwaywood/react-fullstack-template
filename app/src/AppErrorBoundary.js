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
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>
        }
        return children
    }
}
