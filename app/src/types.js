// @flow

export type FunctionalComponent<P, Context> = (
    props: P,
    context: Context
) => ?React$Element<any>

export type ClassComponent<Def, P, St> = Class<React$Component<Def, P, St>>

export type HOC<Props> = (
    FunctionalComponent<Props, void>
) => FunctionalComponent<Props, void>
