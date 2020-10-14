const express = require('express');
const { v1Router } = require('./api');
const { MDModel } = require('./db');

const connection = {
    url: 'mongodb://localhost:27017',
    db: 'db_testing'
};

const createApp = async () => {
    const app = express();
    
    app.use(express.json());

    app.use('/api/v1', v1Router);
    await MDModel.createConnection(connection, { useUnifiedTopology: true });
    return app;
};

module.exports.createApp = createApp;