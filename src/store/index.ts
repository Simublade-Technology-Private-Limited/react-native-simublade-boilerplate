import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';

const composeEnhancers = compose;

const loggerMiddleware = createLogger({
  predicate: (_getState, _action) => __DEV__,
});

function configureStore(initialState = {}) {
  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore();
export default store;
