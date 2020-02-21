import { createStore } from 'redux';
import  currencyReducer from './reducers';

export default createStore(currencyReducer);