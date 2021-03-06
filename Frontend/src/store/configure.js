import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import CountReducer from '../store/reducers';

const rootReducer = combineReducers({
  trashApp: CountReducer,
});

const Configure = () => {
  return configureStore({reducer: rootReducer});
};

export default Configure;
