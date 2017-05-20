import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './ducks';


const reduxStore = createStore(rootReducer, applyMiddleware(logger));

export default reduxStore;
