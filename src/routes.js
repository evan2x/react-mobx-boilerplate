import Layout from 'views/Layout';
import Home from 'views/Home';

const routes = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      {
        path: 'profile',
        getComponent(nextState, cb) {
          import('views/Profile').then((module) => {
            cb(null, module.default);
          });
        }
      },
      {
        path: 'repositories',
        getComponent(nextState, cb) {
          import('views/Repositories').then((module) => {
            cb(null, module.default);
          });
        }
      }
    ]
  }
];

export default routes;
