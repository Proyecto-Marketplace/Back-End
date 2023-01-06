// const TABLA = 'categories';

module.exports = (injectedStore) => {
    const service = new injectedStore();

    const list = () => {
      return service.find();
      // const data = [{id: "1234", name: ""}];
      // return data;
    }

    const getId = (idCategory) => {
      return service.findId(idCategory);
    }

    const upCategory = (data) => {
      return service.create(data);
    }

    const update = (data) => {
      return service.update(data, { where: { id_category: data.idCategory } });
    }

    const deleteCategory = (idCategory) => {
      return service.deleteCategory(idCategory);
    }

  return {
    list,
    getId,
    upCategory,
    update,
    deleteCategory,
  };

}
