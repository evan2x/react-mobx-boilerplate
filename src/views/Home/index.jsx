import React from 'react';
import { inject, observer } from 'mobx-react';

@inject(({ homeStore }) => ({
  homeStore
}))
@observer
export default class Home extends React.Component {
  componentDidMount() {
    const { homeStore } = this.props;

    homeStore.fetchIntro();
  }

  render() {
    const { homeStore: { content } } = this.props;

    return (
      <section>
        <h1>Home</h1>
        <article>
          <p>{content}</p>
        </article>
      </section>
    );
  }
}
