import React from 'react';
import { inject, observer } from 'mobx-react';

import styles from './style.css';

@inject((stores) => ({
  repository: stores.repository
}))
@observer
export default class Repositories extends React.Component {
  state = {
    isFetching: true,
    error: ''
  }

  componentDidMount() {
    const { repository } = this.props;

    repository.fetchRepos('evan2x')
      .catch((err) => {
        this.setState({
          error: err.message
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false
        });
      });
  }

  renderTable() {
    const { repository: { list: repos } } = this.props;
    const { isFetching, error } = this.state;

    if (isFetching) {
      return (
        <tr>
          <td colSpan="3" className={styles.wait}>正在加载数据......</td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan="3" className={styles.error}>{error}</td>
        </tr>
      );
    }

    return repos.map((repo) => (
      <tr key={repo.id}>
        <td><a href={repo.url}>{repo.name}</a></td>
        <td>{repo.lang}</td>
        <td>{repo.desc}</td>
      </tr>
    ));
  }

  render() {
    return (
      <section>
        <h1>Repositories</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th width="210">Name</th>
              <th width="113">Language</th>
              <th width="456">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </section>
    );
  }
}
