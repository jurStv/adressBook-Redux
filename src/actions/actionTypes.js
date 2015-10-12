import Type from 'union-type';

const Actions = Type( {
  Add: [Object],
  Remove: [String],
  StartEditing: [String, Object],
  Modify: [String, Object],
  Filter: [String],
  Errorify: [Array],
} );

export default Actions;
