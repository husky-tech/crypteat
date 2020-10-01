import React, { Component } from 'react';

import styles from './genreSearch.css'

export default class GenreSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="genre_search_outer">
          <section className="area_search_wrapper">
            <h3 className="search_title">エリアから探す</h3>
          </section>
          <section className="genre_search_wrapper">
            <h3 className="search_title">ジャンルから探す</h3>
          </section>
        </div>
      </React.Fragment>
    )
  }
}
