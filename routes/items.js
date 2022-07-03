let BasicRouterService = require("../utils/BasicRouterService")

var express = require('express');
var router = express.Router();


const collectionName = 'items'

const routerService = new BasicRouterService(router);

router = routerService.initCRUD4Coll(collectionName);

module.exports = router;
