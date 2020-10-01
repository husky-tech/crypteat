import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './admin.css';

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Main from '../../../components/main/main';
import AutoSuggestion from '../../../components/autosuggestion/autosuggestion'
import Search from '../../../components/search/search'
import RecommendShops from '../../../components/recommendShops/recommendShops'

import AdminRecommendShops from '../../../components/adminRecommendShops/adminRecommendShops'

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header headerMainText="管理画面(店舗詳細)" />
        <Link to="/admin/create">
          作成画面
        </Link>
        <Main />
        <Search />
        <AdminRecommendShops />
        <Footer />
      </React.Fragment>
    )
  }
}

Admin.propTypes = {
  title: PropTypes.string.isRequired,
};
