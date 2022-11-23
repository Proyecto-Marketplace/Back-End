const express = require('express');
const response = require('../../../libs/response');
const controller = require('./controller');
const route = express.Router();

route.get('/', getCategories);

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

module.exports = route;
