// @flow

import * as React from "react"

type Props = {
    children?: React.Node
}
type State = {
    hasError: boolean
}

export default class HomeContainerErrorBoundary extends React.Component<
    Props,
    State
> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

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
