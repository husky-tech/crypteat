import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import styles from './adminRecommendShops.css'

import img02 from './images/store02.png';
import sun from './images/sun.png';
import moon from './images/moon.png';
import train from './images/train.png';
import time from './images/time.png';

import { readShops } from '../../actions'

const img01 = 'https://tabelog.com/imgview/original?id=r1692124067697';

class AdminRecommendShops extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.readShops()
  }


  renderShops() {
    //console.log(this.props.shops)
    return _.map(this.props.shops, shop => (
      //return (
      <li>
      <Link to={`/admin/shop/${shop.id}`}>
        <div className="admin_recommend_contents">
          <img className="admin_store_image" src={img01} />
          <div className="admincontents">
              <h2 className="admin_title">{shop.name} [{shop.genre}]</h2>
            <div className="admin_comment">{shop.detail}</div>
            <div>
              <dl className="budgets">
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={sun} />
                    <dd className="budgets_text"> {shop.price_min}ADA〜</dd>
                  </dt>
                </div>
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={moon} />
                    <dd className="budgets_text"> {shop.price_max}ADA〜</dd>
                  </dt>
                </div>
              </dl>
            </div>
            <div>
              <dl className="budgets">
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={train} />
                    <dd className="budgets_text"> {shop.station}</dd>
                  </dt>
                </div>
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={time} />
                    <dd className="budgets_text"> {shop.takestime}分</dd>
                  </dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
        </Link>
      </li>

      //)
    ))
  }

  render() {
    return (
      <React.Fragment>
        <h1>ここは管理画面です</h1>
        <div className="recommend_outer_wrapper">
          <div className="title_wrapper">
            <h1>おすすめ店舗</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminRecommendShops);
