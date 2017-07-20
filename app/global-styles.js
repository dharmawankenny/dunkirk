import { injectGlobal } from 'styled-components';

import './app.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    background: #FAFAFA;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    position: relative;
    background: #FAFAFA;
    height: 100%;
    width: 100%;
    min-height: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  button {
    &:hover,
    &:focus {
      outline: none;
      cursor: pointer;
    }
  }
`;
