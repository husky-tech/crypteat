import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { postShop } from '../../../actions'
import axios from 'axios'

import styles from './create.css';

import Header from '../../../components/header/header';

//This is using Material-UI for layout
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const style = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginRight: theme.spacing.unit
  }
});

//https://redux-form.com/7.4.2/examples/material-ui/
//使ってない引数がたくさんあるけど保留。とりあえず動く。
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

class Create extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)

    //const { classes } = props;
  }

  async onSubmit(values) {
    await this.props.postShop(values)
  }


  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return (
      <React.Fragment>
        <Header headerText="管理画面(作成)" />
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="admin_content">
            <div className="input_area"><Field label="店の名前" name="name" className="input_middle" component={renderTextField} /></div>
            <div className="input_area"><Field label="店舗の短い説明" name="detail_short" className="input_full" component={renderTextField} /></div>
            <div className="input_area"><Field label="店舗の詳細解説" name="detail_long" className="input_full" component={renderMultiTextField} /></div>
            <div className="input_area"><Field label="予算：昼" type="number" name="price_lunch" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="予算：夜" type="number" name="price_dinner" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="住所" type="text" name="address" className="input_middle" component={renderTextField} /></div>
            <div className="input_area"><Field label="最寄駅" type="text" name="station" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="駅からの所要時間(分)" type="number" name="takestime" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="ジャンル" type="text" name="genre" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="電話番号" type="text" name="tell" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="営業時間" type="text" name="businesshour" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="定休日" type="text" name="holiday" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="備考" type="text" name="remark" className="input_full" component={renderMultiTextField} /></div>
            <div className="input_area"><Field label="URL(PC)" type="text" name="url_pc" className="input_middle" component={renderTextField} /></div>
            <div className="input_area"><Field label="URL(モバイル)" type="text" name="url_mobile" className="input_middle" component={renderTextField} /></div>
            <div className="input_area"><Field label="ADA利用可能メニュー" type="text" name="availablemenu" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="画像URL(カンマ区切り)" type="text" name="images" className="input_full" component={renderMultiTextField} /></div>
            
            <div className="input_area"><Field label="記事別パスワード" type="password" name="password_post" className="input_short" component={renderTextField} /></div>
            <div className="input_area"><Field label="登録用パスワード" type="password" name="password_admin" className="input_short" component={renderTextField} /></div>
            <div>
              <Button variant="contained" color="primary" type="submit" value="Submit" disabled={pristine || submitting || invalid}>
                Upload
         <CloudUploadIcon className={style.rightIcon} />
              </Button>
              <Link to="/admin">Cancel</Link>
            </div>

          </div>

        </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
  const errors = {}
  //console.log(values)
  console.log("おだです" + values)
  if (!values.name) errors.name = "Enter name,pls"
  return errors
}

Create.propTypes = {
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = ({ postShop })

export default connect(null, mapDispatchToProps)
  (
  reduxForm({ validate, form: 'ShopCreate' })(Create)
  );
