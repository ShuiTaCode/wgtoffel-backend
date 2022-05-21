var express = require('express');
const DatabaseClient = require("./DatabaseClient");
var router = express.Router();

/* GET users listing. */
router.get('/all', async function(req, res, next) {
  const client = new DatabaseClient('test')
    const areas = await client.getCollectionByName('areas')
    res.send(areas);
});
router.get('/', async function(req, res, next) {
  const client = new DatabaseClient('test')
    const area = await client.getEntityById(req.body.id)
    res.send(area);
});
router.post('/create', async function(req, res, next) {
  const client = new DatabaseClient('test')
  let area = req.body
  area['ts'] = new Date().toISOString()
  const test = await client.insertDocumentInCollection('areas',area)
  res.send(test);
});
router.put('/', async function(req, res, next) {
  const client = new DatabaseClient('test')
  let area = req.body
  const test = await client.updateFieldOfDocumentInCollection('areas',area,'log')
  res.send(test);
});
router.put('/v2', async function(req, res, next) {
  const client = new DatabaseClient('test')
  let area = req.body
  const test = await client.updateDocumentInCollection('areas',area)
  res.send(test);
});



module.exports = router;
