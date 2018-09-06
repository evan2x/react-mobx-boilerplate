import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import NProgress from 'nprogress';
import { hot } from 'react-hot-loader';

import routes from './routes';
import createStore from './stores';

import 'nprogress/nprogress.css';

function decorateEnterHook(route) {
  const originalEnter = route.onEnter;

  if (originalEnter == null) {
    route.onEnter = function () {
      NProgress.start();
    };
  } else {
    switch (originalEnter.length) {
      case 0:
        route.onEnter = function () {
          originalEnter.apply(this);
          NProgress.start();
        };
        break;
      case 1:
        route.onEnter = function (nextState) {
          originalEnter.call(this, nextState);
          NProgress.start();
        };
        break;
      case 2:
        route.onEnter = function (nextState, replace) {
          originalEnter.call(this, nextState, replace);
          NProgress.start();
        };
        break;
      case 3:
      default:
        route.onEnter = function (nextState, replace, callback) {
          originalEnter.call(this, nextState, replace, callback);
          NProgress.start();
        };
    }
  }

  return route;
}

/**
 * 装饰路由，添加进度条展示
 * @param {Object} route 旧路由
 * @return {Object} 新路由
 */
function decorateRoute(route) {
  let newRoute = { ...route };

  newRoute = decorateEnterHook(newRoute);

  if (newRoute.indexRoute && newRoute.indexRoute.component) {
    newRoute.indexRoute = decorateEnterHook(newRoute.indexRoute);
  }

  return newRoute;
}

/**
 * apply NProgress
 * @param {Array} routeList
 * @return {Array} 应用过 NProgress 插件的路由列表
 */
function applyNProgress(routeList) {
  let newRoutes = [];

  for (let i = 0, route; route = routeList[i++];) {
    let newRoute = decorateRoute(route);

    if (Array.isArray(route.childRoutes)) {
      newRoute.childRoutes = applyNProgress(route.childRoutes);
    }

    newRoutes.push(newRoute);
  }

  return newRoutes;
}

function createElement(Component, props) {
  NProgress.done();
  return (
    <Component {...props} />
  );
}

/**
 * initial state tree
 * @type {Object}
 */
let initialState = {};

/**
 * mobx store
 * @type {Object}
 */
let stores = createStore(initialState);

const App = () => (
  <Provider {...stores}>
    <Router history={browserHistory} routes={applyNProgress(routes)} createElement={createElement} />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default hot(module)(App);
