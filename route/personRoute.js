'use strict';

const Router = require('express');
const personRepo = require('../repository/personRepository');

const getPersonRoutes = (app) => {
    //const router = new Router();
    app
        .get('/person/:id', (req, res) => {
            // #swagger.tags = ['Person']
            const id = parseInt(req.params.id);
            const result = personRepo.getById(id);
            res.send(result);
        })
        .get('/person', (req, res) => {
            // #swagger.tags = ['Person']
            const result = personRepo.getAll();
            res.send(result);
        })
        .delete('/person/:id', (req, res) => {
            // #swagger.tags = ['Person']
            personRepo.remove();
            const result = 'Last person remove. Total count: '
                + personRepo.persons.size;
            res.send(result);
        })
        .post('/person', (req, res) => {
            // #swagger.tags = ['Person']
            const person = req.body;
            const result = personRepo.save(person);
            res.send(result);
        });

    //app.use('/person', router);
};

module.exports = getPersonRoutes;