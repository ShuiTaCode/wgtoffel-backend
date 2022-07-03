const {ObjectId} = require("mongodb");
const {MongoClient} = require("mongodb");

'use strict'



module.exports= class DatabaseClient{
     constructor(dbName) {
        this.dbName = dbName
        this.URI = "mongodb+srv://admin:xVnXe7U8Fm55yIo8@cluster0.clnal.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
        this.client = new MongoClient(this.URI, { useNewUrlParser: true});
        this.connected = false
        // this.client.connect().then(()=>{
        //     this.connected = true
        // });
    }

    async getCollectionByName(name){
        await this.client.connect()
            return this.client.db(this.dbName).collection(name).find({},).toArray()




    }

    async getCollectionByFieldAndVal(name,field,value){
        await this.client.connect()

            let filterObject = {}
            filterObject[field] = value
            return this.client.db(this.dbName).collection(name).find(filterObject).toArray()
            // await this.client.close()
            // return res

    }

    async getEntityById(name,id){
        await this.client.connect()

            return this.client.db(this.dbName).collection(name).find(ObjectId(id)).toArray()
            // await this.client.close()
            // return res

    }

    async insertDocumentInCollection(name,document){
        await this.client.connect()

            // await this.client.connect();
            return this.client.db(this.dbName).collection(name).insertOne(document)
            // await this.client.close()
            // return res

    }

    async updateFieldOfDocumentInCollection(collectionName,document,field){
        await this.client.connect()

            // await this.client.connect();
            let setObject = {}
            setObject[field] = document[field]
            console.log('setObject', setObject)
            return this.client.db(this.dbName).collection(collectionName).updateOne({_id: ObjectId(document._id)},
                {$set: setObject},
                {upsert: true})
            // await this.client.close()
            // return res

    }
    async updateDocumentInCollection(collectionName,document){
        await this.client.connect()
        // await this.client.connect();

            let setObject = {}
            for (let key in document) {
                if (key !== '_id') {
                    setObject[key] = document[key]
                }
            }
            // console.log('setObject without _id',document)
            return this.client.db(this.dbName).collection(collectionName).updateOne({_id: ObjectId(document._id)},
                {$set: setObject},
                {upsert: true})

            // await this.client.close()
            // return res

    }
}