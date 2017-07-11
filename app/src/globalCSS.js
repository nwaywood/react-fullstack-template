import { injectGlobal } from "emotion/react"

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueExtraThin.ttf');
      font-weight: 100;
    }
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueThin.ttf');
      font-weight: 200;
    }
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueLight.ttf');
      font-weight: 300;
    }
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueRegular.ttf');
      font-weight: 400;
    }
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueMedium.ttf');
      font-weight: 500;
    }
    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf');
      font-weight: 600;
    }

    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueBold.ttf');
      font-weight: 700;
    }

    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueHv.ttf');
      font-weight: 800;
    }

    @font-face {
      font-family: 'Helvetica Neue';
      src: url('../public/assets/fonts/HelveticaNeue/HelveticaNeueHv.ttf');
      font-weight: 900;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        margin: 0px;
    }
`
