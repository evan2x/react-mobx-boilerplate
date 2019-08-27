import React from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => ({
  home: stores.home
}))
@observer
export default class Home extends React.Component {
  componentDidMount() {
    const { home } = this.props;

    home.fetchIntro();
  }

  render() {
    const { home: { content } } = this.props;

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
