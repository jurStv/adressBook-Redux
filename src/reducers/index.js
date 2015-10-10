import R from "ramda";
import Actions from "../actions/actionTypes";
import list from './list';
import filter from './filter';
import startEditing from './startEditing';
import errorify from './errorify';
import storageSync from "./sync";
import Type from "union-type";

var returnDefault = { _: (wrongAction ,state) => state };

var combineReducers = R.mergeAll([
  list,
  filter,
  startEditing,
  errorify,
  returnDefault
]);


const rootReducer = R.flip( Actions.caseOn( combineReducers ) );

export default  { rootReducer, storageSync  } ;
