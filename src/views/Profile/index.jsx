import React from 'react';
import { inject, observer } from 'mobx-react';

import Card from 'components/Card';

@inject(({ profileStore }) => ({
  profileStore
}))
@observer
export default class Profile extends React.Component {

  state = {
    isFetching: false
  }

  componentDidMount() {
    const { profileStore } = this.props;

    this.setState({
      isFetching: true
    });

    profileStore.fetchUser('evan2x')
      .catch((err) => {
        this.setState({
          error: err.message
        })
      })
      .finally(() => {
        this.setState({
          isFetching: false
        })
      });
  }

  render() {
    const { profileStore } = this.props;
    const { isFetching, error } = this.state;

    return (
      <section>
        <h1>Profile</h1>
        <Card 
          name={profileStore.name}
          email={profileStore.email}
          github={profileStore.github}
          avatar={profileStore.avatar}
          location={profileStore.location}
          createdAt={profileStore.createdAt}
          error={error}
          isFetching={isFetching}/>
      </section>
    );
  }
}
