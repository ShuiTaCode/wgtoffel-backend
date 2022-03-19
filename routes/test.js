
var express = require('express');
var router = express.Router();
var  DatabaseClient  = require('./DatabaseClient');



/* GET users listing. */
router.get('/', async(req, res) => {
  const client = new DatabaseClient('test')
  const test = await client.getCollectionByName('table')

  res.send(test);
});





module.exports = router;
