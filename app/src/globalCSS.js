/* eslint no-unused-expressions:0 */
import { injectGlobal, fontFace } from "emotion"
import latoRegular from "~assets/fonts/Lato/Lato-Regular.ttf"
import latoBold from "~assets/fonts/Lato/Lato-Bold.ttf"

fontFace`
  font-family: 'Lato';
  src: url(${latoRegular});
  font-weight: 400;
`

fontFace`
  font-family: 'Lato';
  src: url(${latoBold});
  font-weight: 600;
`

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: Lato, Arial, "Lucida Grande", sans-serif;
        margin: 0px;
    }
`
