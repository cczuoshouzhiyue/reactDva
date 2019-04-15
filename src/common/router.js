import dynamic from 'dva/dynamic';
import React, {createElement} from 'react';
let routeConfig;

const modelNotExited = (app, model) => {
  for (let i = 0; i < app._models.length; i++) {
    let item = app._models[i];
    if (item.namespace === model){
      return false;
    }
  }
  return  true;
};


const dynamicWrapper = (app, model, component) => {
  return dynamic({
    app,
    models: () => model.filter(item => modelNotExited(app, item)).map(item => import(`../models/${item}.js`)),
    component: component
  });
};

export const getRouterData = (app) => {
  if (routeConfig) {
    return routeConfig;
  }
  routeConfig = {
    '/': {
      component: dynamicWrapper(app, ['global'], ()=> import('../layouts'))
    },
    '/home': {
      component: dynamicWrapper(app, ['global'], ()=> import('../routes/HomePage'))
    },
    '/unerad': {
      component: dynamicWrapper(app, ['global'], ()=> import('../routes/UnreadMessage'))
    },
    '/getting': {
      component: dynamicWrapper(app, ['global'], ()=> import('../routes/GettingStarted'))
    },
    '/api': {
      component: dynamicWrapper(app, ['global'], ()=> import('../routes/API'))
    },
    '/about': {
      component: dynamicWrapper(app, ['global'], ()=> import('../routes/About'))
    },
    '/setting': {
      component: dynamicWrapper(app, [''], ()=> import('../routes/Setting'))
    },
  };
  return routeConfig;
};
