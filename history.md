# History

Over time this repo has evolved and we have removed (and added) technologies as we re-evaluate what we believe is the best tech stack for React.

Here are the main technologies that we have removed and our reasoning/justifications.

- [Redux](#redux)
- [Styled-Components](#styled-components)
- [HOCs](#hocs)

## Redux

We believe that the overhead that Redux introduces does not outweigh the benefits that it provides for **most** applications. It is quite verbose, requiring a lot of additional code to be written (actions, reducers, action creators). It also adds indirection to the codebase, making it harder to grok for people unfamiliar with the codebase.

We are not the only ones that feel this way, lots of thoughtleaders in the React/JavaScript community agree, including the [creator of Redux himself](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

## Styled-Components

We used [Styled-Components](https://github.com/styled-components/styled-components) in a number of projects before we decided to adopt [emotion](https://github.com/emotion-js/emotion) instead.

Emotion is a ~99% (I just made up that number, please don't quote me) superset of Styled-Components, meaning it can basically do everything that Styled-Components can do, plus more (and its also way faster!). We found Styled-Components to be annoying to use when you want to apply 1 or 2 styles to an element and don't want to create a whole Styled-Component for it (and therefore also having to think of a name for it as well). This led to having a mixture of inline styles and Styled-Components which was a pain to maintain due to the different syntaxes. For example:

```javascript
// inline style
<div style={{ paddingLeft: "4px" }}>Hello</div>
```

```javascript
// Styled-Component
<PaddedDiv>Hello</RedDiv>

const RedDiv = styled.div`
    padding-left: 4px;
`
```

```javascript
// emotion
<div css={`padding-left: 4px`} />
```

Note that inline styles require `paddingLeft`, whereas emotion and Styled-Components use standard CSS, `padding-left`. As you can see, Styled-Components is the most verbose and doesn't have the flexibility that emotion does.

## HOCs

HOCs (higher order components) have lots of issues. Instead of me explaining it here I urge you to watch this fantastic talk from one of the creators of [React-Router](https://github.com/ReactTraining/react-router), [Never Write Another HOC](https://www.youtube.com/watch?v=BcVAq3YFiuc)
