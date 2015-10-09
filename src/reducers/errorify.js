export default {
  Errorify (errorData, model) {
    return {...model, error: errorData};
  }
}
