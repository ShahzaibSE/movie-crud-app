'use strict'

const mongoose = require('mongoose');
var Movie = require('./dbInjector').dbInjector.movieModel;
var Audit = require('./dbInjector').dbInjector.auditModel;

const exec = require('child_process').execFile;

exports.add = function(req,res){
    var body = req.body;

    Movie.find({}).exec(function(err,data){
        if(err){
          console.log("Error");
          console.log(err);

          res.send({
              status: false,
              resCode: 500,
              isError: true,
              message: "Internal server occured"
          });
        }else if(data){
            console.log("Data");
            console.log(data);

            res.send({
                status: true,
                resCode: 200,
                isError: false,
                message: "Data already exist",
                data: data
            });
        }else{
            //Inserting new record of movie
            var movieInput = {
                mid: Number(body.mid),
                title: body.title.toLowerCase(),
                director: body.director.toLowerCase(),
                producer: body.producer.toLowerCase(),
                cast: body.cast,    //Array
                writer: body.writer, //Array
                releaseDate: body.releaseDate,
                rating: Number(body.rating),
                createdAt: new Date().getDate()
            };

            var newMovie = new Movie(movieInput);
            newMovie.save(function(err,data){
                if(err){
                    console.log("Error");
                    console.log(err);

                    res.send({
                        status: false,
                        resCode: 500,
                        isError: true,
                        message: "Internal server error while saving record"
                    });
                }else if(data){
                    console.log("Data");
                    console.log(data);

                    res.send({
                        status: true,
                        resCode: 200,
                        isError: false,
                        message: "Data saved successfully"
                    });
                }
            });
        }
    })
};

exports.update = function(req,res){
    var body = req.body;
    var queryString = req.query.v;
    var params = req.params;
    
    Movie.update({ mid : Number(params.mid) }, 
                 { $set: { title : body.title, 
                           producer : body.producer, 
                           director: body.director,
                           $push : { cast : body.cast.toLowerCase() }
                           }})
          .exec(function(err,data){
              if(err){
                 console.log("Error");
                 console.log(err);

                 res.send({
                     status: false,
                     resCode: 500,
                     iserror: true,
                     message: "Internal server error while updating data"
                 });
              }else if(data){
                  console.log("Data");
                  console.log(data);

                  res.send({
                      status : true,
                      resCode : 200,
                      isError : false,
                      message : "Data updated successfully"  
                  });
              }
          })              
};  

exports.delete = function(req,res){
    var body = req.body;

    Movies.remove({$or:[
      { title: body.title.toLowerCase() },
      { producer: body.producer.toLowerCase() },
      { director: body.director.toLowerCase() }]})
    .exec(function(err,data){
        if(err){
            console.log("Error");
            console.log(err);

            res.send({
                status: false,
                resCode: 500,
                isError: true,
                message: "Internal server error while deleting data"
            });
        }else if(data){
            console.log("Removal response");
            
            res.send({
                status: true,
                resCode: 200,
                isError: false,
                message: "Data removed successfully"
            });
        }
    })
};

exports.selectall = function(req,res){
    Movie.find().exec(function(err,data){
        if(err){
            console.log("Error occured");
            console.log(err);
            
            res.send({
                status: false,
                resCode: 400,
                isError: true,
                message: "Internal error occured"
            });
        }else if(data){
            console.log("Data found");
            console.log(data);

            res.send({
                status: true,
                resCode: 200,
                isError: false,
                message: "Data found successfully"
            });
        }
    });
};

