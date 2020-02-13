const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()
const mongojs = require('mongojs')
const config = require('config')
const db = config.get("mongoURI");
const Cart = require('../../models/cart')

//Load database ONLY. Not Collections
async function loadCollection() {
    const client = await mongodb.MongoClient.connect(db, { useNewUrlParser: true } )

    return client.db('dn_products');
}

//@route GET /cart , Show Items
router.get('/', async (req, res) => {
    const processor = await loadCollection();
    res.send(await processor.collection('cart').find({}).toArray());
})

//@route POST /cart , Show Cart Items
router.post('/', async (req,res) => {
    console.log(req.body)
    const cart = await loadCollection()
    const addTocart = await cart.collection('cart').insertOne({
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price
    })
    res.send(addTocart)
})

module.exports = router;