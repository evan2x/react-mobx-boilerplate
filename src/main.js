import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader/root';
import store from './store';
import App from './views/App';

const WrappedApp = () => (
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <WrappedApp />,
  document.getElementById('app')
);

export default hot(WrappedApp);
