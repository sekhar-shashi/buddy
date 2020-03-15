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

import Login from 'login';
import Admin from 'admin';
import Blog from 'blog';

const initialState = {};
const store = configureStore(initialState, history);

const App: React.FC = () => {
  const user = useSelector((state: StoreSate) => state.login?.user);
  return (
    <ConnectedRouter history={history}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Show Articles</Link>
              </li>
              <li>
                <Link to="/add">Add new Articles</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/">
              <Blog />
            </Route>
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
