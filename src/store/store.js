import { applyMiddleware, createStore } from "redux";
import counterReducer from "../reduce/counterReducer";
import rootReducer from '../reduce/index'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";

// const store = createStore(rootReducer,
//      applyMiddleware(thunk));
     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


     const sagaMiddleware =createSagaMiddleware()
const store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);


export default store;