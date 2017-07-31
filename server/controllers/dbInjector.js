'use strict'

const mongoose = require('mongoose');
var models = require('./../models/schema.js');

exports.dbInjector = {
    movieModel: models.movies(),
    auditModel: models.audit()  
};