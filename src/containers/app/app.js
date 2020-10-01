import React,{ Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Top from '../top/top'
import Admin from '../admins/admin/admin'
import Create from '../admins/create/create'
import Detail from '../detail/detail'
import AdminDetail from '../admins/adminDetail/adminDetail'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/shop/:id" component={Detail} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/shop/:id/edit" component={AdminDetail} />
          <Route exact path="/manage/create" component={Create} />
        </Switch>
      </React.Fragment>
    )
  }


}
