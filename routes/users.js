var express = require('express');
// const DatabaseClient = require("./DatabaseClient");
const BasicRouterService = require("../utils/BasicRouterService");
var router = express.Router();

const collectionName = 'users'

const routerService = new BasicRouterService(router);

router = routerService.initCRUD4Coll(collectionName);

module.exports = router;


/* GET users listing. */
// router.get('/all', async function(req, res, next) {
//   const client = new DatabaseClient('test')
//   const user_id = req.query.id;
//   if(user_id){
//     console.log('userId',user_id)
//     const test = await client.getEntityById('users',user_id)
//     res.send(test);
//   }else{
//     const test = await client.getCollectionByName('users')
//     res.send(test);
//   }
// });
// router.put('/', async function(req, res, next) {
//   const client = new DatabaseClient('test')
//   let user = req.body
//   const test = await client.updateFieldOfDocumentInCollection('users',user,'cleaningList')
//   res.send(test);
// });


module.exports = router;
