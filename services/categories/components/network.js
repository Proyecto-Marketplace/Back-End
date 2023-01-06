const express = require('express');
const response = require('../../../libs/response');
const controller = require('./');
const route = express.Router();

route.get('/', getCategories);
route.get('/:idCategory', getCategory);
route.post('/', upCategory);
route.put('/', setCategory);
route.delete('/:idCategory', deleteCategory);

async function getCategories(req, res, next){

    try {
        const cateries = await controller.list();
        // const cateries = [{id: "1234", name: "jason"}];
        response.success(req, res, cateries, 200);
    } catch (error) {
        console.log(error)
        // next(error)
        response.error(req, res, error, 400);
    }
}

async function getCategory(req, res, next){
  try {
    const category = await controller.getId(req.params.idCategory);
    response.success(req, res, category, 200);
  } catch (error) {
    response.error(req, res, error, 400);
  }
}

async function upCategory(req, res, next){
  try {
    const {data} = req.body;
    const category = await controller.upCategory(data);
    response.success(req, res, category, 200);
  } catch (error) {
    console.log(error)
    response.error(req, res, error, 400);
  }
}

async function setCategory(req, res, next){
  try {
    const {data} = req.body;
    const category = await controller.update(data);
    response.success(req, res, category, 200);
  } catch (error) {
    response.error(req, res, error, 400);
  }
}

async function deleteCategory(req, res, next){
  try {
    const category = await controller.deleteCategory(req.params.idCategory);
    response.success(req, res, category, 200);
  } catch (error) {
    console.log(error)
    response.error(req, res, error, 400);
  }
}

module.exports = route;
