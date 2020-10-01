import React, { Component } from 'react';

import styles from './search.css'
import AutoSuggestion from '../autosuggestion/autosuggestion'

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="search_wrapper">
          <div className="search_content">
            <AutoSuggestion />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
