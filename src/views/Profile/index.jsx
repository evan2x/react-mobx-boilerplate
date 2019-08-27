import React from 'react';
import { inject, observer } from 'mobx-react';

import Card from '@/components/Card';

@inject((stores) => ({
  profile: stores.profile
}))
@observer
export default class Profile extends React.Component {
  state = {
    isFetching: false
  }

  componentDidMount() {
    const { profile } = this.props;

    this.setState({
      isFetching: true
    });

    profile.fetchUser('evan2x')
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

  render() {
    const { profile } = this.props;
    const { isFetching, error } = this.state;

    return (
      <section>
        <h1>Profile</h1>
        <Card
          name={profile.name}
          email={profile.email}
          github={profile.github}
          avatar={profile.avatar}
          location={profile.location}
          createdAt={profile.createdAt}
          error={error}
          isFetching={isFetching}
        />
      </section>
    );
  }
}
