var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schemas = require('../models/Schema.js');

/* SAVE Models */
router.put('/*', function(req, res, next) {
console.log('editing the items....');
  response = {}; // check for read && attach permissions for loged in user edit, delete,create
  var model =  req.body.model;
  if(!Schemas[model]){
    response.error = 'Bad Request!!, Invalid request';     
    return  res.status(404).json(response);// define a standard error object and logging
   } 
   Schemas[model].findByIdAndUpdate(req.body.data._id,req.body.data,function (err, result) {
    if (err){
      console.log('error has ocuured');
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
  console.log('server side posting');
  console.log(req.body);
 
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