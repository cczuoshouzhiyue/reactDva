import React from 'react';
import dva from 'dva';
import { routerConfig } from './router';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { message } from 'antd';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import createLogger from 'redux-logger';


const onError = (e) => {
  message.error(e.message, /* duration */3);
};
const onAction = [createLogger()];
const app = dva({
  history: createHistory(),
  onAction,
  onError,

});
app.use(createLoading({effect: true}));

app.router(routerConfig);
app.start('#root');
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
