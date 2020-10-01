import React, { Component } from 'react';
import { connect } from 'react-redux'

import styles from './detail.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel'
//import Detail from '../detail/detail'

import sun from './images/sun.png';
import moon from './images/moon.png';
import train from './images/train.png';
import time from './images/time.png';

import { readShop } from '../../actions'

var imgdata = [
  'https://tabelog.com/imgview/original?id=r1692124067697',
  'https://tabelog.com/imgview/original?id=r0384838579424',
  'https://tabelog.com/imgview/original?id=r1693224067702',
];

class Detail extends Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.readShop(id)
  }

  render() {
    //console.log('render')
    const shop = this.props.Values
    console.log(shop)
    return (
      <React.Fragment>
        <body>
          <Header />
          <h1>{shop.name}</h1>

          <div>
            <dl className="budgets">
              <div className="budgets_items">
                <dt className="budgets_label"><img className="budgets_image" src={sun} />
                  <dd className="budgets_text">{shop.genre}</dd>
                </dt>
              </div>
              <div className="budgets_items">
                <dt className="budgets_label"><img className="budgets_image" src={sun} />
                  <dd className="budgets_text"> {shop.price_lunch}ADA〜</dd>
                </dt>
              </div>
              <div className="budgets_items">
                <dt className="budgets_label"><img className="budgets_image" src={moon} />
                  <dd className="budgets_text"> {shop.price_dinner}ADA〜</dd>
                </dt>
              </div>
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
          <div>
            <img className="budgets_image" src={time} />
            住所：{shop.address}
            </div>

          <Carousel Images={imgdata} Text='' />

          <div>
          <h2>PR文（短）:{shop.detail_short}</h2>
          </div>
          <div>
          {shop.detail_long}
          </div>

          <div className="heading_wrapper">
            <h1>店舗情報(ぐるなび基準)</h1>
            <div className="heading_wrapper"></div>
            <ul>
              <li>電話番号:{shop.tell}</li>
              <li>営業時間:{shop.buinesswork}</li>
              <li>休業日:{shop.holiday}</li>
              <li>アクセス(路線名-駅名-駅出口-徒歩分):{shop.station}駅から徒歩{shop.takestime}分</li>
              <li>PCサイトURL:{shop.url_pc}</li>
              <li>携帯サイトURL:{shop.url_mobile}</li>
              <li>ADA支払い可能なメニュー:{shop.availablemenu}</li>
              <li>備考:{shop.remark}</li>
            </ul>
          </div>
          <Footer />
        </body>
      </React.Fragment>
    )
  }
}

//const mapStateToProps = state => ({shops: state.shops })



//const mapStateToProps = state => ({shop: state.shop })

//const mapStateToProps =(state, ownProps) =>{
const mapStateToProps = (state) => {
  //console.log(state)

  //const shop = state.shops[ownProps.match.params.id]
  const shop = state.shops
  //console.log('shop_data')
  //console.log(shop)
  return { Values: shop }
}

const mapDispatchToProps = ({ readShop })

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
