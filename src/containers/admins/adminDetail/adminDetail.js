import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import styles from './adminDetail.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carousel from '../../../components/carousel/carousel'
//import Detail from '../detail/detail'

import sun from './images/sun.png';
import moon from './images/moon.png';
import train from './images/train.png';
import time from './images/time.png';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { readShop, putShop, deleteShop } from '../../../actions'


//アイコンとボタンのスタイル編集 #MaterialUI用
const style = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit
  }
});

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    label={label}
    {...input}
    {...custom}
  />
)

const renderMultiTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    label={label}
    multiline={true}
    rows={3}
    rowsMax={4}
    {...input}
    {...custom}
  />
)

class AdminDetail extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onChangeField = this.onChangeField.bind(this);
    this.state = {
      password: '',
    };
  }

  async onSubmit(values) {
    //console.log('this.props.shop: \n', this.props.Values)
    const { id } = this.props.match.params
    try {
      await this.props.putShop(values, id)
    } catch (e) {
      //console.log('onSubmit Error:', e)
    }
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteShop(id, this.state.password)
    this.props.history.push('/')
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.readShop(id)
  }

  //https://bps-tomoya.hateblo.jp/entry/2016/05/25/154401
  onChangeField(e) {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const shop = this.props.Values
    console.log(shop)
    return (
      <React.Fragment>
        <body>
          <Header headerText="管理画面(店舗詳細)" />
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <h2>店名</h2>
            <div className="input_area"><Field name="name" label={shop.name} className="input_middle" component={renderTextField} /></div>

            <h2>店舗ジャンル</h2>
            <div className="input_area"><Field name="genre" label={shop.genre} className="input_middle" component={renderTextField} /></div>
            <div>
              <dl className="budgets">
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={sun} />
                    <dd className="budgets_text"><div className="input_area"><Field name="price_lunch" label={(`${shop.price_lunch}ADA`)} className="input_short" component={renderTextField} /></div></dd>
                  </dt>
                </div>
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={moon} />
                    <dd className="budgets_text"><Field name="price_dinner" label={(`${shop.price_dinner}ADA`)} className="input_short" component={renderTextField} /></dd>
                  </dt>
                </div>
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={train} />
                    <dd className="budgets_text"><Field name="station" label={(`${shop.station}駅`)} className="input_short" component={renderTextField} /></dd>
                  </dt>
                </div>
                <div className="budgets_items">
                  <dt className="budgets_label"><img className="budgets_image" src={time} />
                    <dd className="budgets_text"><Field name="takestime" label={(`${shop.takestime}分`)} className="input_short" component={renderTextField} /></dd>
                  </dt>
                </div>
              </dl>
            </div>

            <div>
              <img className="budgets_image" src={time} />
              <Field name="address" label={(`${shop.address}`)} className="input_middle" component={renderTextField} />
            </div>



            <div>
              <h2>PR文（短）:{shop.detail}</h2>
              <div className="input_area"><Field name="detail_short" label={shop.detail_short} className="input_middle" component={renderTextField} /></div>
            </div>
            <div>
              PR文（長）:<Field name="detail_long" label={shop.detail_long} className="input_middle" component={renderMultiTextField} />
            </div>

            <div className="shop_info">
              <h1>店舗情報(ぐるなび基準)</h1>
              <div className="shop_info"></div>
              <ul>
                <li>電話番号:<Field name="tell" label={shop.tell} className="input_middle" component={renderTextField} /></li>
                <li>営業時間:<Field name="businesshour" label={shop.businesshour} className="input_middle" component={renderTextField} /></li>
                <li>休業日:<Field name="holiday" label={shop.holiday} className="input_middle" component={renderTextField} /></li>
                <li>アクセス(路線名-駅名-駅出口-徒歩分):
                  [駅名:<Field name="station" label={shop.station} className="input_short" component={renderTextField} />],
                  [徒歩分:<Field name="takestime" label={shop.takestime} className="input_short" component={renderTextField} />]
                </li>
                <li>備考:<Field name="remark" label={shop.remark} className="input_middle" component={renderMultiTextField} /></li>
                <li>PCサイトURL:<Field name="url_pc" label={shop.url_pc} className="input_middle" component={renderTextField} /></li>
                <li>携帯サイトURL:<Field name="url_mobile" label={shop.url_mobile} className="input_middle" component={renderTextField} /></li>
                <li>ADA支払い可能なメニュー：<Field name="availablemenu" label={shop.availablemenu} className="input_middle" component={renderTextField} /></li>
              </ul>
            </div>

            <div>
              <h2>画像URL (カンマ区切り)</h2>
              <div className="input_area"><Field name="images" label={shop.images} className="input_middle" component={renderMultiTextField} /></div>
            </div>

              <h2>記事別パスワード</h2>
            <div className="input_area"><Field name="password" onChange={this.onChangeField} type="password" className="input_middle" component={renderTextField} /></div>

            <div className="UD_button_wrapper">
              <Button variant="contained" color="primary" type="submit" value="Submit" disabled={pristine || submitting || invalid}>
                Upload
                </Button>
              <Button onClick={this.onDeleteClick} variant="contained" color="secondary" type="submit" value="Submit" >
                Delete
                </Button>
            </div>
          </form>

          <Footer />
        </body>
      </React.Fragment>
    )
  }
}


const validate = values => {
  const errors = {}
  console.log("おだです" + values)
  if (!values.name) errors.name = "Enter name,pls"
  return errors

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

const mapDispatchToProps = ({ readShop, putShop, deleteShop })

export default connect(mapStateToProps, mapDispatchToProps)
  (
  reduxForm({ validate, form: 'ShopUpdate' })(AdminDetail)
  );
