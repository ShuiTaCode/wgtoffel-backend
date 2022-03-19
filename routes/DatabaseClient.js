const {MongoClient} = require("mongodb");

'use strict'

module.exports= class DatabaseClient{

    constructor(dbName) {
        this.dbName = dbName
        this.URI = "mongodb+srv://admin:xVnXe7U8Fm55yIo8@cluster0.clnal.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
        this.client = new MongoClient(this.URI, { useNewUrlParser: true});
    }

    async getCollectionByName(name){
        await this.client.connect();
        return this.client.db(this.dbName).collection(name).find({},).toArray()
    }
}