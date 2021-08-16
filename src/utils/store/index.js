import {rootReducer} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const middleware = [ReduxThunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));

const persistor = persistStore(store);

export {persistor, store};
