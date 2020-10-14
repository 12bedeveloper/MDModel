const express = require('express');
const { CategoryModel } = require('../models');

const categoryRouter = express.Router();

categoryRouter.post('/', async (req, res) => {
  const category = await CategoryModel.insertOne(req.body);
  res.status(201).send(category);
});

categoryRouter.get('/', async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).send(categories);
});

module.exports.categoryRouter = categoryRouter;
