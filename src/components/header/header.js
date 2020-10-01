import React, { Component } from 'react';

import styles from './header.css'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header_line">
          <div className="header_wrapper">
            <h2 className="header_sub_title">{this.props.headerSubText}</h2>
            <h1 className="header_title">{this.props.headerMainText}</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
