const MongoClient = require('mongodb').MongoClient;
class AbstractMDModel {
  static async createConnection(connection, options = {}) {
    const client = await MongoClient.connect(connection.url, options);
    this.client = client;
    this.db = await client.db(connection.db);
    return client;
  }

  static get collection() {
    return this.db.collection(this.collectionName);
  }
}

AbstractMDModel.prototype.client = {};
AbstractMDModel.prototype.db = {};
AbstractMDModel.prototype.collectionName = '';

module.exports.AbstractMDModel = AbstractMDModel;
