/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import GithubLogo from 'assets/github.png';
import LinkedInLogo from 'assets/linkedin.png';

import {
  Home
} from './styled';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Home>
        <div className="logoPack">
          <div className="logo">
            <h2>DK</h2>
            <div className="bar" />
          </div>
          <h2>
            DHARMAWANKENNY.GITHUB.IO
          </h2>
        </div>
        <div className="comingSoon">
          <h1>Coming</h1>
          <div className="ending">
            <h1>Soon</h1>
            <div className="bar" />
          </div>
        </div>
        <div className="social">
          <a href="https://www.github.com/dharmawankenny" target="_blank"><img src={GithubLogo} alt="github" /></a>
          <a href="https://www.linkedin.com/in/kennyrd" target="_blank"><img src={LinkedInLogo} alt="github" /></a>
        </div>
      </Home>
    );
  }
}
