'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

exports.movies = function() {

    var movieSchema = Schema({
        _id:Schema.ObjectId,
        mid: Number,
        title: String,  //required
        director: String, //required
        producer: String, //required
        cast: [],
        writer: [],
        releaseDate: Date,
        rating: Number, //required
        createdAt: Date,
        updatedAt: Date
    });

    return mongoose.Model('movies',movieSchema)
};

exports.audit = function(){

    var auditSchema = Schema({
        _id: Schema.ObjectId,
        collectionName: String,
        createdAt: Date,
        updatedAt: Date 
    });

};