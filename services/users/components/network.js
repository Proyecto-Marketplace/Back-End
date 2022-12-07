const express = require('express');
const response = require('../../../libs/response');
const controller = require('./');
const route = express.Router();

route.get('/', getUsers);

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

module.exports = route;
