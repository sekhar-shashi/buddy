import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import { getWindow } from 'utils/window';
import createReducer, { StoreSate } from 'utils/reducers';

export default function configureStore(initialState: Omit<StoreSate, 'router'> = {}, history: History) {
  const reduxSagaMonitorOptions = {};

  const composeEnhancers = getWindow().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  const injectedReducers = {};

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(injectedReducers));
    });
  }

  return store;
}
