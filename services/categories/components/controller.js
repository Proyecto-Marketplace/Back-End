const TABLA = 'categories';

module.exports = (injectedStore) => {
    const list = () => {
    const service = new injectedStore();
    return service.find(TABLA);
    // const data = [{id: "1234", name: "jason"}];
    // return data;
  }

  return {
    list
  };

}
