const express = require('express');
const { userRouter, categoryRouter } = require('../routes');

const v1Router = express.Router();

v1Router.use('/user', userRouter);
v1Router.use('/category', categoryRouter);

module.exports.v1Router = v1Router;