import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { LocationState } from 'history';
import history from 'utils/history';
import loginReducer, { LoginState } from 'login/reducer';

export type StoreSate<T = {}> = T & {
  login?: LoginState,
  router?: LocationState,
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    login: loginReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
