// const TABLA = 'users';

module.exports = (injectedStore) => {
    const list = () => {
      const service = new injectedStore();
      return service.find();
    }

    const getId = (id) => {
      const service = new injectedStore();
      return service.findId(id);
    }

    const create = (data) => {
      const service = new injectedStore();
      return service.create(data);
    }

    const update = (id, data) => {
      const service = new injectedStore();
      return service.update(id, data);
    }

    const deleteUser = (id) => {
      const service = new injectedStore();
      return service.delete(id);
    }

  return {
    list,
    getId,
    create,
    update,
    deleteUser
  };

}
