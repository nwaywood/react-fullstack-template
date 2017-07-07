// @flow

export type FunctionalComponent<P, Context> = (
    props: P,
    context: Context
) => ?React$Element<any>

export type HOC<Props> = (
    FunctionalComponent<Props, void>
) => FunctionalComponent<Props, void>
