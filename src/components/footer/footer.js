import React, { Component } from 'react';

import styles from './footer.css'

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="footer_wrapper">
          <div className="footer_inner_wrapper">
            <h4 className="footer_pages">運営企業</h4>
            <h4 className="footer_pages">利用規約</h4>
            <h4 className="footer_pages">プライバシーポリシー</h4>
            <h4 className="footer_pages">お問い合わせ</h4>
            <h3 className="footer_company_name">Ludovico.inc</h3>
          </div>
          <div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
