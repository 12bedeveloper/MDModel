const ObjectId = require('mongodb').ObjectId;
class MDModelHelper {
  static convertToObjectId(query) {
    Object.keys(query).forEach((key) => {
      if (ObjectId.isValid(query[key])) {
        query[key] = ObjectId(query[key]);
      }
    });
    return query;
  }
}

module.exports.MDModelHelper = MDModelHelper;
