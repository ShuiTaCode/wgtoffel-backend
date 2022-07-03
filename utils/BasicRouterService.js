

const DatabaseClient = require("../routes/DatabaseClient");



module.exports =  class BasicRouterService {

    constructor(router ) {
        this.router = router
        this.client = new DatabaseClient('test')
    }


    initCRUD4Coll(collectionName) {
        this.router.get('/all', async function (req, res,) {

            const collection = await this.client.getCollectionByName(collectionName)
            res.send(collection);
        }.bind(this))
        this.router.get('/', async function (req, res,) {
            const entity = await this.client.getEntityById(collectionName, req.body.id)
            res.send(entity);
        }.bind(this));
        this.router.post('/create', async function (req, res,) {
            let entity = req.body
            entity['ts'] = new Date().toISOString()
            const test = await this.client.insertDocumentInCollection(collectionName, entity)
            res.send(test);
        }.bind(this));
        this.router.put('/', async function (req, res,) {
            let entity = req.body
            const test = await this.client.updateFieldOfDocumentInCollection(collectionName, entity, 'log')
            res.send(test);
        }.bind(this));
        this.router.put('/v2', async function (req, res,) {
            let entity = req.body
            const test = await this.client.updateDocumentInCollection(collectionName, entity)
            res.send(test);
        }.bind(this));

        this.router.put('/v3', async function (req, res,) {
            let entity = req.body
            for (let field in entity) {
                if (field !== '_id') {
                    await this.client.updateFieldOfDocumentInCollection(collectionName, entity, field)
                }
            }
            res.send();
        }.bind(this));

        return this.router
    }

}