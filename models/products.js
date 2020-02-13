const mongoose = require('mongoose')
const Schema = mongoose.Schema

//CREATE SCHEMA

const ProductSchema = new Schema({
    brand: {
        type: String,
    },
    name: {
        type: String,
    }
})

module.exports = Products = mongoose.model('processors', ProductSchema)