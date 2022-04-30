var express = require('express');
const DatabaseClient = require("./DatabaseClient");
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const client = new DatabaseClient('test')
  const user_id = req.query.id;
  if(user_id){
    console.log('userId',user_id)
    const test = await client.getEntityById('users',user_id)
    res.send(test);
  }else{
    const test = await client.getCollectionByName('users')
    res.send(test);
  }
});
router.put('/', async function(req, res, next) {
  const client = new DatabaseClient('test')
  let user = req.body
  const test = await client.updateFieldOfDocumentInCollection('users',user,'cleaningList')
  res.send(test);
});


module.exports = router;
