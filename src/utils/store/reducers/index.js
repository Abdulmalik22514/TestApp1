import {combineReducers} from 'redux';
import fetchingReducer from './fetchReducer';

export const rootReducer = combineReducers({
  storyReducer: fetchingReducer,
});
