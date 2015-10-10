const sync = (model, storeName = 'adress-book') => {
  let data = JSON.stringify({list: model.list});
  localStorage.setItem(storeName, data);
  return model;
}
export default  function({ getState }) {
    return (next) => (action) => {
      let returnValue = next(action);
      sync( getState() );
      return returnValue;
    };
  }
