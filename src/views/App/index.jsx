import React from 'react';
import loadable from '@loadable/component';
import { Link, Switch, Route } from 'react-router-dom';
import NProgress from '@/components/NProgress';

import styles from './style.css';

const loadableOptions = {
  fallback: <NProgress />
};

const Home = loadable(() => import('@/views/Home'), loadableOptions);
const Profile = loadable(() => import('@/views/Profile'), loadableOptions);
const Repositories = loadable(() => import('@/views/Repositories'), loadableOptions);

export default function App() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/repositories">Repositories</Link></li>
        </ul>
      </nav>
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/repositories" component={Repositories} />
        </Switch>
      </div>
    </div>
  );
}
