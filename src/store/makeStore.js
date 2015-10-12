import { applyMiddleware } from 'redux';
import createStore from '../helpers/createStore';
import { rootReducer, storageSync} from '../reducers';
import R from 'ramda';
import { safeJSONParse, mergeWithDefault } from '../helpers/initial';

const defaultAdress = { email: 'key@key.com', firstname: 'key', lastname: 'key', _id: 'test_id1106306' };
const getDefaultState = R.compose(
  mergeWithDefault(defaultAdress),
  safeJSONParse,
  str => localStorage.getItem(str)
);

export default function(initialState = getDefaultState('adress-book')){
  return applyMiddleware(storageSync)(createStore)(rootReducer, initialState);
}
