import { createStore, applyMiddleware,compose} from 'redux';
import reducer from "./reducer"
import createSagaMiddleware from 'redux-saga'
import Sagas from './sagas'
// import thunk from 'redux-thunk';

// 在没有引入中间件的时候
// const store =createStore(
//     reducer,
//      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
// =============================
//引入thunk这个中间件的时候
// const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//   const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
// );
// const store =createStore(reducer,enhancer);
// ==================================
//引入redux-saga中间件的时候
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware) 
);
const store =createStore(reducer,enhancer);
sagaMiddleware.run(Sagas)
export default store;
