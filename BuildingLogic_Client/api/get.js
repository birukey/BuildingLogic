var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schemas = require('../models/Schema.js');

/* SAVE Models */
router.get('/:model/:id', function(req, res, next) {
console.log('fetching items....');
  response = {}; // check for read && attach permissions for loged in user edit, delete,create
  var model =  req.params.model;
  console.log('model is '+ req.params.id+ req.params.model);
  if(!Schemas[model]){
    response.error = 'Bad Request!!, Search not found';     
    return  res.status(404).json(response);// define a standard error object and logging
   } 
   Schemas[model].findById(req.params.id,function (err, result) {
    if (err){
      console.log('error has ocuured');
      // log error format === Mr X  performing an Action @ Time on Model raised Error ===
      // generate standard error object and attach to the error object and return  
      response.error = 'Somthing wrong has been occured while processing for the request';         
      return  res.status(500).json(response);// define a standard error object and logging
    } 
    response.model = req.params.model;
    response.data = result;
    //response.fieldConfig = fieldConfig;
    res.json(response);
  });
 
});




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