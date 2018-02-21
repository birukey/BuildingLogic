var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schemas = require('../models/Schema.js');

/* GET ALL ModelsS */
router.get('/:model', function(req, res, next) {   
  response = {}; // check for read && attach permissions for loged in user edit, delete,create
  var model = req.params.model;  
  console.log('model is '+ model);
  if(!Schemas[model]){
    response.error = 'Bad Request!!, Search not found';     
    return  res.status(404).json(response);// define a standard error object and logging
   } 
    Schemas[model].find(function (err, result) {
      if (err){
        // log error format === Mr X  performing an Action @ Time on Model raised Error ===
        // generate standard error object and attach to the error object and return  
        response.error = 'Somthing wrong has been occured while processing for the request';         
        return  res.status(500).json(response);// define a standard error object and logging
      } 
      response.model = model;
      response.data = result;
      //response.fieldConfig = fieldConfig;
      res.json(response);
    });
});   

// var parseUrl = function(url){ 
//   var result= {operation: null, schema:  null};
//   var segments = url.split('/');
//   console.log(segments);
//    if(segments[1]) {
//     result.operation = segments[1];
//   }
//   if(segments[2]){
//     result.schema = segments[2];
//   }
//   return result;
// };



/* GET SINGLE Models BY ID */
// router.get('/:id', function(req, res, next) {
//   Models.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* SAVE Models */
// router.post('/', function(req, res, next) {
//   Models.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* UPDATE Models */
// router.put('/:id', function(req, res, next) {
//   Models.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE Models */
// router.delete('/:id', function(req, res, next) {
//   Models.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router