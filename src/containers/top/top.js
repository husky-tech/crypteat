import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './top.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../components/main/main';
import Carousel from '../../components/carousel/carousel';
import AutoSuggestion from '../../components/autosuggestion/autosuggestion';
import Search from '../../components/search/search';
import NewShops from '../../components/newshops/newshops';
import RecommendShops from '../../components/recommendShops/recommendShops';
import GenreSearch from '../../components/genreSearch/genreSearch'

var imgdata = [
  process.env.PUBLIC_URL + '/images/gourmet01.png',
  process.env.PUBLIC_URL + '/images/gourmet02.png',
  process.env.PUBLIC_URL + '/images/gourmet03.png'
];

export default class Top extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <React.Fragment>
        <body>
          <Header headerSubText="暗号通貨ADAで支払える店を探せるサービス" headerMainText="CryptEat"/>
          <Carousel Images={imgdata} Text='ADAで贅沢なヒトトキ' />
          <Main />
          <div className="content_outer">
            <NewShops />
            <RecommendShops />
          </div>

          <Footer />
        </body>
      </React.Fragment>
    )
  }

}
