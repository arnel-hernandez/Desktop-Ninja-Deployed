const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()
const mongojs = require('mongojs')
const config = require('config')
const db = config.get("mongoURI");

//Load database ONLY. Not Collections
async function loadCollection() {
    const client = await mongodb.MongoClient.connect(db, { useNewUrlParser: true } )

    return client.db('dn_products');
}

//@route GET /processors , Show Items
router.get('/', async (req, res) => {
    const processor = await loadCollection();
    res.send(await processor.collection('processors').find({}).toArray());
})

//@route GET /processors , Show One Items
router.get('/:id', async (req, res) => {
    const processor = await loadCollection()
    //CONVERT TO MONGO OBJECT
    let ObjectID = mongojs.ObjectID
    const processorID = await processor.collection('processors').find({ _id: ObjectID(req.params.id) }).toArray();
    res.send(processorID)
})

module.exports = router;