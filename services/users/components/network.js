const express = require('express');
const response = require('../../../libs/response');
const controller = require('./');
const route = express.Router();

route.get('/', getUsers);
route.get('/:id', getId);
route.post('/', upUser);
route.put('/', update);
route.delete('/:id', deleteUser);

async function getUsers(req, res, next){

    try {
        const users = await controller.list();
        response.success(req, res, users, 200);
    } catch (error) {
        console.log(error)
        // next(error)
        response.error(req, res, error, 400);
    }
}

async function getId(req, res, next){
  const { id } = req.params;
  try {
      const user = await controller.getId(id);
      response.success(req, res, user, 200);
  } catch (error) {
      console.log(error)
      // next(error)
      response.error(req, res, error, 400);
  }
}

async function upUser(req, res, next){
  const { email, password } = req.body;
  try {
      if(!email || !password) throw "data Invalid";
      const user = await controller.create({email, password});
      response.success(req, res, user, 200);
  } catch (error) {
      console.log(error)
      // next(error)
      response.error(req, res, error, 400);
  }
}

async function update(req, res, next){
  const { id, email, password } = req.body;
  try {
      if(!id) throw "data Invalid";
      const user = await controller.update(id, {email, password});
      response.success(req, res, user, 200);
  } catch (error) {
      console.log(error)
      // next(error)
      response.error(req, res, error, 400);
  }
}

async function deleteUser(req, res, next){
  const { id } = req.params;
  try {
      if(!id ) throw "data Invalid";
      const user = await controller.deleteUser(id);
      response.success(req, res, user, 200);
  } catch (error) {
      console.log(error)
      // next(error)
      response.error(req, res, error, 400);
  }
}

module.exports = route;
