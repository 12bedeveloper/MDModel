const { MDModel } = require('../db');
class UserModel extends MDModel {
  static getTotalRecords() {
    return this.collection.countDocuments();
  }
}
UserModel.collectionName = 'user';

module.exports.UserModel = UserModel;
