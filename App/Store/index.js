import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import AuthReducer from './Reducers/AuthReducer';
import AuthEpic from './Epic/AuthEpic';
import AppReducer from './Reducers/AppReducer';
import AppEpic from './Epic/AppEpic';

//combine epic
const rootEpic = combineEpics(
  AuthEpic.signupEpic,
  AuthEpic.loginEpic,
  AppEpic.fetchPatients,
  AppEpic.addPatients,
  AppEpic.removePatients,
  AppEpic.searchPatients
);
//combine reducers
export const rootReducer = combineReducers({
  AuthReducer,
  AppReducer
});

//create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//connect middleware with store
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//create store with middleware
const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;