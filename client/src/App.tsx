import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useSelector, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { StoreSate } from 'utils/reducers';
import configureStore from 'utils/store';
import history from 'utils/history';

import AddArticle from 'add';
import Blog from 'blog';

const initialState = {};
const store = configureStore(initialState, history);

const App: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add new Articles</Link>
              </li>
              <li>
                <Link to="/getAllArticle">Get All article</Link>
              </li>
            </ul>
          </nav>

          <Switch>
          <Route exact path="/" />
          <Route path="/add" component={AddArticle} />
          <Route path="/getAllArticle" component={Blog} />

          </Switch>
        </div>
      </Router>
    </ConnectedRouter>
  );
};

const AppWithState: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithState;
