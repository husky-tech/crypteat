import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import styles from './newshops.css'

import GenreSearch from '../genreSearch/genreSearch'

import img02 from './images/store02.png';
import noon from './images/sun.png';
import night from './images/moon.png';
import train from './images/train.png';
import time from './images/time.png';
import genre from './images/genre.png';

import { readShops } from '../../actions'

const img01 = 'https://tabelog.com/imgview/original?id=r1692124067697';

class NewShops extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.readShops()
  }

  renderShops() {
    //console.log(this.props.shops)
    return _.map(this.props.shops, shop => (
      <li>
      <Link to={`/shop/${shop.id}`} className="link_style">
        <div className="newshops_contents">
          <img className="store_image" src={img01} />
          <div className="contents">
            <h2 className="title">{shop.name}</h2>
            <div className="introduce">{shop.detail}</div>
            <div>
              <dl className="genre">
                <div className="genre_items">
                  <dt className="genre_label"><img className="genre_image" src={genre} />
                    <dd className="genre_text">{shop.genre}</dd>
                  </dt>
                </div>
              </dl>
            </div>
            <div>
              <dl className="budgets">
                <div className="budget_noon_item">
                  <dt className="budget_noon_label"><img className="budget_noon_image" src={noon} />
                    <dd className="budget_noon_text"> {shop.price_min}ADA〜</dd>
                  </dt>
                </div>
                <div className="budget_night_item">
                  <dt className="budget_night_label"><img className="budget_night_image" src={night} />
                    <dd className="budget_night_text"> {shop.price_max}ADA〜</dd>
                  </dt>
                </div>
              </dl>
            </div>
            <div>
              <dl className="place">
                <div className="place_items">
                  <dt className="place_label"><img className="station_image" src={train} />
                    <dd className="place_text"> {shop.station}から徒歩約{shop.takestime}</dd>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
        </Link>
      </li>
    ))
  }

  render() {
    return (
      <React.Fragment>
          <div className="newshops_outer_wrapper">
            <div className="title_wrapper">
              <h1>最新掲載店舗</h1>
            </div>
            <ol>
              {this.renderShops()}
            </ol>
          </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ shops: state.shops })

const mapDispatchToProps = ({ readShops })

export default connect(mapStateToProps, mapDispatchToProps)(NewShops);
