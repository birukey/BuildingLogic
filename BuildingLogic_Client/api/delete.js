var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schemas = require('../models/Schema.js');

/* SAVE Models */
router.delete('/:model/:id', function(req, res, next) {
  console.log('deleting the items....');
  var model =  req.params.model;
  response = {}; // check for read && attach permissions for loged in user edit, delete,create
  //var model =  req.body.model;  
  console.log('model is '+ model + req.params.id );
  if(!Schemas[model]){
    response.error = 'Bad Request!!, invalid  input';     
    return  res.status(404).json(response);// define a standard error object and logging
   } 
   Schemas[model].findByIdAndRemove(req.params.id, req.body,function (err, result) {
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

});


module.exports = router