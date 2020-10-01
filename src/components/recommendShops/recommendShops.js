import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import styles from './recommendShops.css'

import GenreSearch from '../genreSearch/genreSearch'

import img02 from './images/store02.png';
import noon from './images/sun.png';
import night from './images/moon.png';
import train from './images/train.png';
import time from './images/time.png';
import genre from './images/genre.png';
import enjoy from './images/enjoythetrip.png'

import { readShops } from '../../actions'

const img01 = 'https://tabelog.com/imgview/original?id=r1692124067697';

class RecommendShops extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.readShops()
  }

  //これはEnjoyTheTrip用の
  renderRecommendShop() {
    return _.map(this.props.shops, shop => (
        <ul className="recommend_allcontent_list_wrapper">
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
          <li className="recommend_content_list_outer_wrapper">
            <a className="recommend_content_list_inner_wrapper">
              <img src={enjoy} className="recommend_image"/>
              <p className="recommend_introduce">
                大阪難波のグルメ組合！
              </p>
            </a>
          </li>
        </ul>
    ))
  }

  render() {
    return (
      <React.Fragment>
          <div className="recommend_outer_wrapper">
            <div className="title_wrapper">
              <h1>おすすめ店舗</h1>
            </div>
            <ol>
              {this.renderRecommendShop()}
            </ol>
          </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ shops: state.shops })

const mapDispatchToProps = ({ readShops })

export default connect(mapStateToProps, mapDispatchToProps)(RecommendShops);
