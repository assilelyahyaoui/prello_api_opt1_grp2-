const mongoose = require('mongoose');
//const seeder = require('mongoose-seeder');
const data = require('../fakeData/data.json');
const seeder = require('./seeder.js');
const User = require( '../models/User'); 
const Board = require('../models/Board');
const List = require('../models/List');

const Card = require('../models/Card');
const CheckList = require('../models/CheckList');

const crypto = require('crypto');


/**
 * Establish connection to MongoDB
 */
mongoose.connect(process.env.MONGO_URL, { /*promiseLibrary: require('bluebird'),*/ useNewUrlParser: true})
  .then(() => {
    seeder.seed().then((err) => console.log("seeders"));
  })
  .catch((err) => {
      console.error(err);
      console.log('Something is wrong with the connection to MongoDB.')
    })

module.exports = mongoose;