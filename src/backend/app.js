//import express
const express = require('express');


//create express app
const app = express();



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});





app.use('/api/users',(req,res,next) => {
    
    const users = [
        {id: 1
        ,username: 'alex'
        ,password: '1'},
        {id: 2
        ,username: 'elias'
        ,password: '2'},
        {id: 3
        ,username: 'athanasios'
        ,password: '3'},
        {id: 4
        ,username: 'aglaia'
        ,password: '4'},
        {id: 5
        ,username: 'konstantinos'
        ,password: '5'}
    ];
    res.json(users);
});

module.exports = app;