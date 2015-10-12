import R from 'ramda';
import cuid from 'cuid';

export default {
  Remove(id, model) {
    return R.evolve( { list: R.reject((c) => c._id === id) }, model);
  },
  Add(newAdr, model) {
    return R.evolve( {
      list: R.append(R.assoc('_id', cuid(), newAdr)),
      editing: R.drop(2),
      error: R.drop(2),
    }, model);
  },
  Modify(id, newData, model) {
    return R.evolve( {
      list: R.map(adress => (adress._id === id ? R.merge(adress, newData) : adress)),
      editing: R.drop(2),
      error: R.drop(2),
    }, model);
  },
};
