// store.js
import { createStore } from 'redux';
import authReducer from '../redux/reducers';

const store = createStore(authReducer);

export default store;
