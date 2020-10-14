const express = require('express');
const { UserModel } = require('../models');

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  const user = await UserModel.insert(req.body);
  res.status(200).send(user);
});

userRouter.get('/', async (req, res) => {
  const users = await UserModel.find();
  const totalRecords = await UserModel.getTotalRecords();
  res.status(200).send({ records: users, totalRecords: totalRecords });
});

userRouter.get('/:id', async (req, res) => {
  const query = { _id: req.params.id };
  const user = await UserModel.find(query);
  res.status(200).send(user);
});

userRouter.put('/:id', async (req, res) => {
  const query = { _id: req.params.id };
  const user = await UserModel.update(query, req.body);
  res.status(200).send(user);
});

userRouter.delete('/:id', async (req, res) => {
  const query = { _id: req.params.id };
  const result = await UserModel.delete(query);
  res.status(200).send(result);
});

module.exports.userRouter = userRouter;
