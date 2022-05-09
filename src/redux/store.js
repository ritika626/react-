
    import { createStore ,applyMiddleware ,compose} from 'redux';
    import createSagaMiddleware from 'redux-saga';
    import mySaga from './sagas'
    import rootReducer from './rootReducer';

    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(sagaMiddleware)),
        );
      

    sagaMiddleware.run(mySaga)
    // const store = createStore(rootReducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    export default store;