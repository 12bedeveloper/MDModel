const { AbstractMDModel } = require('./AbstractMDModel');
const { MDModelHelper } = require('./MDModelHelper');

class MDModel extends AbstractMDModel {
  static async find(query = {}) {
    const newQuery = MDModelHelper.convertToObjectId(query);
    const result = await this.collection.find(newQuery).toArray();
    return result.length === 1 ? result[0] : result;
  }

  static async insert(docs) {
    const result = this.collection.insertOne(docs);
    return result.ops[0];
  }

  static async update(query, docs) {
    const newQuery = MDModelHelper.convertToObjectId(query);
    const result = await this.collection.findOneAndUpdate(
      newQuery,
      { $set: docs },
      { returnOriginal: false }
    );
    return result.value;
  }

  static async delete(query) {
    const newQuery = MDModelHelper.convertToObjectId(query);
    const result = await this.collection.findOneAndDelete(newQuery);
    return result.value;
  }
}

module.exports.MDModel = MDModel;
