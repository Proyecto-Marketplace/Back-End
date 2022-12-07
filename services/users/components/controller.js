// const TABLA = 'users';

module.exports = (injectedStore) => {
    const list = () => {
    const service = new injectedStore();
    return service.find();
  }

  return {
    list
  };

}
