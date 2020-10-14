const { MDModel } = require('../db');

class CategoryModel extends MDModel {}
CategoryModel.collectionName = 'category';

module.exports.CategoryModel = CategoryModel;
