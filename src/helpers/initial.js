import R from 'ramda';
const addDefaultUniq = (defItem, key, items) => {
  return (R.containsWith((a, b) => a[key] === b[key], defItem, items)) ?
    items : R.append(defItem, items);
};

const safeJSONParse = str => JSON.parse(str) || { list: [] };
const mergeWithDefault = R.curry((defaultAdress, adresses) => {
  return { list: addDefaultUniq(defaultAdress, '_id', adresses.list), filter: '', editing: [], error: [] };
} );

export default {
  safeJSONParse,
  mergeWithDefault,
};
