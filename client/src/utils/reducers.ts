import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { LocationState } from 'history';
import history from 'utils/history';

export type StoreSate<T = {}> = T & {
  router?: LocationState,
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
