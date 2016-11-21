import React from 'react';
import { render } from 'react-dom';

/* example (import components and then render them into the main document divs) */
/*
render(<Header/>, document.getElementById('header-container'));
render(<Folders/>, document.getElementById('main'));
*/

render(
  <h1>Hello world</h1>,
  document.getElementById('root'),
)
