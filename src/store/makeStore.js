import createStore from "../helpers/createStore";
import rootReducer from "../reducers";
import R from "ramda";
import { safeJSONParse, mergeWithDefault } from "../helpers/initial";

let defaultAdress = {email: "key@key.com", firstname: "key", lastname: "key", _id: "test_id1106306"};
let getDefaultState = R.compose(
  mergeWithDefault(defaultAdress),
  safeJSONParse,
  str => localStorage.getItem(str)
);

export default function( initialState = getDefaultState("adress-book") ){
  return createStore( rootReducer, initialState );
}
