export default function deepFreeze(o) {
  let prop;
  let propKey;
  Object.freeze(o);
  for (propKey in o) {
    prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      void 0;
    }
    deepFreeze(prop);
  }
  return o;
}
