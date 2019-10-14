import { createStore,} from 'redux';
import reducer from "./reducer"
// import createSagaMiddleware from './node_modules/redux-saga'
// import Sagas from './sagas'
// import thunk from 'redux-thunk';
// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     // applyMiddleware(thunk),
//     applyMiddleware(sagaMiddleware)   
//   );

const store =createStore(
    reducer,
    // applyMiddleware(thunk)
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// sagaMiddleware.run(Sagas)
export default store;
