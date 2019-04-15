
/*
   页面布局页面
*/
import React, { Component } from 'react';
import Header from '../component/Header';
import { connect } from 'dva';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Error from '../routes/Error';
import { Loading } from '../component/Common/Loading';
import './index.scss';
import {goRouters} from '../util/router';

class Layouts extends Component {
  render() {
    const {match, routerData, loading} = this.props;
    let data = goRouters(match.path, routerData);
    return (
      <div className="App">
        <Header/>
        <Loading loading = {loading}/>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/home" />)} />
          {data.map(item => (
            <Route key={item.path} path={item.path} exact component={item.component} />
          ))}
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default connect(({global, loading})=> ({
  loading: loading.global,
}))(Layouts);
