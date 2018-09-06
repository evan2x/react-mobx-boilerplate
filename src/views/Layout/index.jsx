import React from 'react';
import { Link } from 'react-router';
import DevTools from 'mobx-react-devtools';

import styles from './style.css';

console.log(process.env.NODE_ENV)

export default class App extends React.Component {
  render() {
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
          {this.props.children}
        </div>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
}
