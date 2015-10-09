export default {
  Filter (filterString, model) {
    return {...model, filter: filterString};
  }
}
