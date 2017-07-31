'use strict'

const movies = require('express').Router();
const movieController = require('./../controllers/movies.controller');

movies.get('/movies',movieController.selectall);
movies.post('/movies',movieController.add);
movies.put('/movies/:mid',movieController.update);
movies.delete('/movies',movieController.delete);

module.exports = movies; 