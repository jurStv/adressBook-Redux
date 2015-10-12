import R from 'ramda';
const findAnyMatchingString = (x) => R.compose(R.any(R.test(RegExp(x))), R.values, R.dissoc('_id'));
export default findAnyMatchingString;
