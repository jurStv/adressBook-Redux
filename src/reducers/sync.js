const sync = (model, storeName = 'adress-book') => {
  const data = JSON.stringify( { list: model.list } );
  localStorage.setItem(storeName, data);
  return model;
};
export default function( { getState } ) {
  return (next) => (action) => {
    const returnValue = next(action);
    sync(getState());
    return returnValue;
  };
}
