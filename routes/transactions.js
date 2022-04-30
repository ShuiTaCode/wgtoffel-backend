var express = require('express');
const DatabaseClient = require("./DatabaseClient");
var router = express.Router();

/* GET users listing. */
router.get('/src', async function(req, res, next) {
  const client = new DatabaseClient('test')
  const src_id = req.query.id;
  if(src_id){
    console.log('src_id',src_id)
    const test = await client.getCollectionByFieldAndVal('transactions','src',src_id)
    res.send(test);
  }
});
router.get('/dst', async function(req, res, next) {
  const client = new DatabaseClient('test')
  const dst_id = req.query.id;
  if(dst_id){
    console.log('dst_id',dst_id)
    const test = await client.getCollectionByFieldAndVal('transactions','dst',dst_id)
    res.send(test);
  }
});

router.get('/any', async function(req, res, next) {
  const client = new DatabaseClient('test')
  const id = req.query.id;
  if(id){
    const aIn = await client.getCollectionByFieldAndVal('transactions','src',id)
    const aOut = await client.getCollectionByFieldAndVal('transactions','dst',id)
    res.send(aIn.concat(aOut));
  }
});

router.get('/all', async function(req, res, next) {
  const client = new DatabaseClient('test')
  const src = req.query.src;
  const dst = req.query.dst;
  if(src&&dst){
    console.log('src,dst',src,dst)
    const aIn = await client.getCollectionByFieldAndVal('transactions','src',src)
    const aOut = await client.getCollectionByFieldAndVal('transactions','dst',dst)
    res.send(aIn.concat(aOut));
  }
});

router.post('/create', async function(req, res, next) {
  const client = new DatabaseClient('test')
  let transaction = req.body
  transaction['ts'] = new Date().toISOString()
  const test = await client.insertDocumentInCollection('transactions',transaction)
  res.send(test);

});



module.exports = router;
