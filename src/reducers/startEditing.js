export default {
  StartEditing(id, adr, model) {
    return { ...model, error: [], editing: [id, adr] };
  },
};
