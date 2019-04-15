import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
const { ConnectedRouter } = routerRedux;
import { getRouterData } from './common/router';

export const routerConfig = ({history, app}) => {
  const routerData = getRouterData(app);
  const App = routerData['/'].component;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' render={props => <App {...props} routerData={routerData}/>}/>
      </Switch>
    </ConnectedRouter>
  );
};